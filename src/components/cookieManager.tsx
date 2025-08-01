import { useState } from "react";

type Options = {
    expires?: Date;
    path?: string;
    domain?: string;
    secure?: boolean;
};

export const useCookies = (key: string): [string | undefined, (value: string, options?: Options) => void] => {
    console.log("Cookies", key);
    const [cookieValue, setCookieValue] = useState<string | undefined>(() => {
        const cookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith(`${key}=`));
        if (cookie) {
            return cookie.split("=")[1];
        }
        return undefined;
    });

    const setCookie = (value: string, options?: Options) => {
        let cookie = `${key}=${value}`;

        if (options) {
            if (options.expires) {
                cookie += `; expires=${options.expires.toUTCString()}`;
            }
            if (options.path) {
                cookie += `; path=${options.path}`;
            }
            if (options.domain) {
                cookie += `; domain=${options.domain}`;
            }
            if (options.secure) {
                cookie += `; secure`;
            }
        }

        document.cookie = cookie;
        setCookieValue(value);
    };

    return [cookieValue, setCookie];
};
