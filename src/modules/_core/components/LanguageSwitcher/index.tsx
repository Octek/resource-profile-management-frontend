/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable id-length */
"use client";
import { Fragment, useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import styled from "@emotion/styled";
import { destroyCookie, parseCookies, setCookie } from "nookies";

import english from "~/public/assets/en.png";
import swedish from "~/public/assets/sv.png";

const LanguageImage = styled(Image)(() => ({
  width: "24px",
  height: "24px",
  marginLeft: 3,
  marginRight: 4,
  opacity: 1,
}));

const LanguageImageLink = styled(Image)(() => ({
  width: "24px",
  height: "24px",
  marginLeft: 3,
  marginRight: 4,
  opacity: 0.4,
  "&:hover": {
    opacity: 1,
    cursor: "pointer",
  },
}));

// The following cookie name is important because it's Google-predefined for the translation engine purpose
const COOKIE_NAME = "googtrans";

// We should know a predefined nickname of a language and provide its title (the name for displaying)
interface LanguageDescriptor {
  name: string;
  title: string;
}

// Types for JS-based declarations in public/assets/scripts/lang-config.js
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace globalThis {
    // eslint-disable-next-line no-var
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState<any>();

  // Initialize translation engine
  useEffect(() => {
    // 1. Read the cookie
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    console.log("language cookie:", existingLanguageCookieValue);
    if (existingLanguageCookieValue) {
      // 2. If the cookie is defined, extract a language nickname from there.
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        // eslint-disable-next-line prefer-destructuring
        languageValue = sp[2];
      } else {
        languageValue = "sv";
      }
    }
    // 3. If __GOOGLE_TRANSLATION_CONFIG__ is defined and we still not decided about languageValue - use default one
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      // 4. Set the current language if we have a related decision.
      setCurrentLanguage(languageValue);
    }
    // 5. Set the language config.
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  // Don't display anything if current language information is unavailable.
  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (targetLanguage: string) => () => {
    console.log("change language:", currentLanguage, targetLanguage);
    // We just need to set the related cookie and reload the page

    destroyCookie(null, COOKIE_NAME, {
      path: "/",
      domain: ".sourceit.se",
    });

    const languageValue = currentLanguage;
    const cookieValue = `/${languageValue}/${targetLanguage}`;

    setCookie(null, COOKIE_NAME, cookieValue, {
      path: "/",
      domain: ".sourceit.se",
    });

    console.log("Saved Cookie:", parseCookies()[COOKIE_NAME]);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  return (
    <Box sx={{ marginLeft: 7.25 }}>
      {languageConfig.languages.map((ld: LanguageDescriptor) => (
        <Fragment key={ld.name}>
          {currentLanguage === ld.name ||
          (currentLanguage === "en" &&
            languageConfig.defaultLanguage === ld) ? (
            <Tooltip title={ld.title} key={`tooltip_active_${ld.name}`}>
              <span key={`l_s_${ld}`}>
                {currentLanguage === "en" ? (
                  <LanguageImage src={english} alt="English" />
                ) : (
                  <LanguageImage src={swedish} alt="Swedish" />
                )}
              </span>
            </Tooltip>
          ) : (
            <Tooltip title={ld.title} key={`tooltip_active_${ld.name}`}>
              <a
                key={`l_s_${ld}`}
                onClick={switchLanguage(ld.name)}
                className="cursor-pointer hover:underline"
              >
                {currentLanguage === "sv" ? (
                  <LanguageImageLink src={english} alt="English" />
                ) : (
                  <LanguageImageLink src={swedish} alt="Swedish" />
                )}
              </a>
            </Tooltip>
          )}
        </Fragment>
      ))}
    </Box>
  );
};

export { COOKIE_NAME, LanguageSwitcher };
