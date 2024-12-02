/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable id-length */
"use client";
import { Fragment, useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import styled from "@emotion/styled";
import { parseCookies, setCookie } from "nookies";

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

  // const deleteAllCookies = () => {
  //   const cookies = parseCookies(); // Retrieve all cookies
  //   Object.keys(cookies).forEach((cookieName) => {
  //     destroyCookie(null, cookieName, { path: "/" });
  //     destroyCookie(null, cookieName, { path: "/", domain: ".sourceit.se" });
  //   });
  //   console.log("All cookies have been deleted.");
  // };

  const switchLanguage = (targetLanguage: string) => () => {
    console.log("change language:", currentLanguage, targetLanguage);
    setCurrentLanguage(targetLanguage); // Update the language state
    const cookieValue = `/${targetLanguage}/${targetLanguage}`; // Set the correct cookie value
    setCookie(null, COOKIE_NAME, cookieValue, {
      path: "/",
    });

    console.log(":::::Saved Cookie:", parseCookies()[COOKIE_NAME]);
  };

  const setDefaultLanguage = async (targetLanguage: string) => {
    console.log("change language:", currentLanguage, targetLanguage);
    const previousLanguage = targetLanguage == "sv" ? "en" : "sv";
    const cookieValue = `/${previousLanguage}/${targetLanguage}`; // Set the correct cookie value
    setCookie(null, COOKIE_NAME, cookieValue, {
      path: "/",
    });
    console.log(":::::Saved Cookie:", parseCookies()[COOKIE_NAME]);
  };

  useEffect(() => {
    const cookies = parseCookies();
    console.log("All Cookies", cookies);
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    if (!languageValue) {
      languageValue = "sv"; // Set default to Swedish if no cookie
    }

    setCurrentLanguage(languageValue);

    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
    setDefaultLanguage(languageValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  return (
    <Box sx={{ marginLeft: 7.25 }}>
      {languageConfig.languages.map((ld: LanguageDescriptor) => (
        <Fragment key={ld.name}>
          {currentLanguage === ld.name ||
          (currentLanguage === "sv" &&
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
            <Tooltip title={ld.title} key={`tooltip_inactive_${ld.name}`}>
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
