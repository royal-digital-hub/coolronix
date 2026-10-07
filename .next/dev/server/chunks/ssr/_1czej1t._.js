module.exports = [
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Phone
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }
    ]
];
const Phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("phone", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript) <export default as Phone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Phone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FloatingContactButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FloatingContactButtons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/servicesData.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const SITE_URL = 'https://coolronix.in';
const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Coolronix | AC Repair & Services in Hyderabad',
        template: '%s | Coolronix'
    },
    description: 'AC repair, gas refill, installation and maintenance services in Hyderabad. Call Coolronix at 093928 73096.',
    alternates: {
        canonical: '/'
    },
    robots: {
        index: true,
        follow: true
    },
    icons: {
        icon: '/logo/coolronix-favicon.png',
        apple: '/logo/coolronix-favicon.png'
    },
    openGraph: {
        type: 'website',
        siteName: 'Coolronix',
        url: SITE_URL,
        title: 'Coolronix | AC Repair & Services in Hyderabad',
        description: 'AC repair, gas refill, installation and maintenance services in Hyderabad.',
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary',
        title: 'Coolronix | AC Repair & Services in Hyderabad',
        description: 'AC repair, gas refill, installation and maintenance services in Hyderabad.'
    }
};
const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': `${SITE_URL}/#business`,
    name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name,
    url: SITE_URL,
    telephone: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phoneRaw,
    description: 'AC repair, gas refill, installation and maintenance services in Hyderabad.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].city,
        addressRegion: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].state,
        postalCode: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].pincode,
        addressCountry: 'IN'
    },
    areaServed: {
        '@type': 'City',
        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].city
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: '08:00',
            closes: '21:00'
        }
    ],
    priceRange: '₹₹'
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en-IN",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(businessSchema)
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-screen flex-col bg-white font-sans text-[#07152E]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "grow",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FloatingContactButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FloatingContactButtons"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/FloatingContactButtons.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingContactButtons",
    ()=>FloatingContactButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WhatsAppIcon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WhatsAppIcon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/servicesData.ts [app-rsc] (ecmascript)");
;
;
;
;
const FloatingContactButtons = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        id: "floating-contact-actions",
        "aria-label": "Quick contact buttons",
        className: "fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                id: "floating-whatsapp-btn",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].whatsappUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Chat with Coolronix on WhatsApp",
                className: "group flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] active:scale-95 text-white font-bold py-2.5 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WhatsAppIcon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WhatsAppIcon"], {
                        variant: "white",
                        className: "w-5 h-5 text-white shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FloatingContactButtons.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold tracking-wide sm:inline",
                        children: "WhatsApp"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FloatingContactButtons.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FloatingContactButtons.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                id: "floating-call-btn",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phoneTel,
                "aria-label": "Call Coolronix directly at 093928 73096",
                className: "group flex items-center gap-2 bg-[#F5B719] hover:bg-[#E0A30B] active:scale-95 text-[#06152F] font-extrabold py-2.5 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-[#DE9E07]/40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                        className: "w-4 h-4 fill-[#06152F] text-[#06152F] shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FloatingContactButtons.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-bold tracking-wide sm:inline",
                        children: "Call"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FloatingContactButtons.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FloatingContactButtons.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FloatingContactButtons.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Footer.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Footer() from the server but Footer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Footer.tsx", "Footer");
}),
"[project]/src/components/Footer.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Footer() from the server but Footer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Footer.tsx <module evaluation>", "Footer");
}),
"[project]/src/components/Footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/Header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Header.tsx", "Header");
}),
"[project]/src/components/Header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Header.tsx <module evaluation>", "Header");
}),
"[project]/src/components/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/WhatsAppIcon.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppIcon",
    ()=>WhatsAppIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const WhatsAppIcon = ({ className = 'w-5 h-5', size, variant = 'color' })=>{
    const widthAttr = size ? {
        width: size
    } : {};
    const heightAttr = size ? {
        height: size
    } : {};
    if (variant === 'white') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            ...widthAttr,
            ...heightAttr,
            className: className,
            "aria-hidden": "true",
            fill: "#FFFFFF",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            }, void 0, false, {
                fileName: "[project]/src/components/WhatsAppIcon.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/WhatsAppIcon.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Official Full Color WhatsApp Logo
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        ...widthAttr,
        ...heightAttr,
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#25D366",
                d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"
            }, void 0, false, {
                fileName: "[project]/src/components/WhatsAppIcon.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FFFFFF",
                d: "M325.1 300.4c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            }, void 0, false, {
                fileName: "[project]/src/components/WhatsAppIcon.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WhatsAppIcon.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/data/servicesData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AC_PROBLEMS",
    ()=>AC_PROBLEMS,
    "BUSINESS_INFO",
    ()=>BUSINESS_INFO,
    "CUSTOMER_REVIEWS",
    ()=>CUSTOMER_REVIEWS,
    "HYDERABAD_AREAS",
    ()=>HYDERABAD_AREAS,
    "SERVICES_DATA",
    ()=>SERVICES_DATA
]);
const BUSINESS_INFO = {
    name: 'Coolronix',
    tagline: 'Beat the Heat, Not Your Budget.',
    phoneDisplay: '093928 73096',
    phoneTel: 'tel:+919392873096',
    phoneRaw: '+919392873096',
    whatsappUrl: 'https://wa.me/919392873096',
    address: 'Uppal, Hyderabad, Telangana 500039',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500039',
    country: 'India',
    rating: 5.0,
    ratingCount: 'Verified Google Rating',
    serviceArea: 'Hyderabad & Greater Twin Cities',
    operatingHours: 'Mon - Sun: 8:00 AM - 9:00 PM'
};
const HYDERABAD_AREAS = [
    'Uppal',
    'Habsiguda',
    'Nacharam',
    'Tarnaka',
    'Ramanthapur',
    'Boduppal',
    'Secunderabad',
    'Dilsukhnagar',
    'LB Nagar',
    'Malakpet',
    'Begumpet',
    'Ameerpet',
    'Kukatpally',
    'Madhapur',
    'Gachibowli',
    'Banjara Hills',
    'Jubilee Hills',
    'Kondapur',
    'Hitec City',
    'Miyapur'
];
const SERVICES_DATA = [
    {
        id: '1',
        number: '01',
        slug: 'ac-repair-service',
        title: 'AC Repair & Service',
        shortDescription: 'Repair and servicing for common AC cooling and performance problems.',
        heroHeadline: 'AC Repair & Service in Hyderabad',
        heroHighlight: 'Fast Diagnosis & Lasting Fixes.',
        intro: 'When your air conditioner malfunctions during the intense Hyderabad heat, prompt diagnosis makes all the difference. Coolronix delivers systematic AC troubleshooting and repair across all major brands and models for both Split and Window ACs.',
        acTypes: [
            'Split AC',
            'Window AC',
            'Inverter AC',
            'Non-Inverter AC'
        ],
        serviceCategory: 'repair',
        warranties: [
            'PCB repairs: 60 days warranty',
            'AC water leakage service: 2 weeks warranty'
        ],
        commonProblems: [
            {
                title: 'AC blowing warm or ambient air',
                description: 'Compressor not engaging, capacitor failure, or cooling coil restriction.'
            },
            {
                title: 'Unusual grinding or buzzing noise',
                description: 'Loose blower bearings, outdoor motor malfunction, or vibration in chassis.'
            },
            {
                title: 'Frequent tripping of MCB switch',
                description: 'Electrical short circuit, high amp draw, or failing compressor windings.'
            },
            {
                title: 'Foul or burning smell from vents',
                description: 'Bacterial buildup on cooling fins or overheating wire insulation.'
            }
        ],
        whatIsIncluded: [
            'Comprehensive 14-point electrical and mechanical diagnostic check',
            'Inspection of compressor, dual run capacitor, and fan motors',
            'Thermostat sensor calibration and PCB relay testing',
            'Filter screening and cooling coil airflow clearance assessment',
            'Gas pressure check and preliminary leak detection',
            'Transparent on-site breakdown of repair requirements before work begins'
        ],
        benefits: [
            {
                title: 'Transparent Diagnosis',
                description: 'We test each component thoroughly so you only repair what is actually worn out.'
            },
            {
                title: 'Genuine Replacement Spares',
                description: 'Compatibility-matched relays, capacitors, and contactors to protect compressor lifespan.'
            },
            {
                title: 'Rapid Local Hyderabad Dispatch',
                description: 'Prompt service technicians dispatched across Uppal, Secunderabad, and wider Hyderabad.'
            }
        ],
        process: [
            {
                step: '01',
                title: 'Call or WhatsApp',
                description: 'Reach out to 093928 73096 describing the symptom (e.g. not cooling, tripping).'
            },
            {
                step: '02',
                title: 'On-Site Diagnostic',
                description: 'Our technician inspects indoor & outdoor units using multimeters and pressure gauges.'
            },
            {
                step: '03',
                title: 'Clear Explanation',
                description: 'We explain the exact cause and give you a straightforward, affordable repair quote.'
            },
            {
                step: '04',
                title: 'Precision Fix & Testing',
                description: 'Faulty parts replaced or repaired, followed by cooling delta temperature verification.'
            }
        ],
        faqs: [
            {
                question: 'Why is my AC running but not cooling the room?',
                answer: 'This is commonly caused by a depleted refrigerant level, a clogged air filter choking the evaporator coil, a failed outdoor capacitor preventing the compressor from kicking on, or a dirty condenser coil unable to dissipate heat.'
            },
            {
                question: 'Do you repair both Split ACs and Window ACs in Hyderabad?',
                answer: 'Yes. Coolronix specializes in both Split AC and Window AC units, including modern inverter models and conventional non-inverter systems.'
            },
            {
                question: 'How quickly can a Coolronix technician visit my home in Hyderabad?',
                answer: 'We provide prompt same-day service scheduling across Hyderabad, with prioritized dispatch in Uppal, Habsiguda, Secunderabad, and eastern zones.'
            }
        ]
    },
    {
        id: '2',
        number: '02',
        slug: 'ac-gas-refill',
        title: 'AC Gas Refill',
        shortDescription: 'Gas refill and charging service for AC systems that require it.',
        heroHeadline: 'AC Gas Refill in Hyderabad',
        heroHighlight: 'Safe Leak Check & Precision Recharging.',
        intro: 'Air conditioners do not consume refrigerant like fuel; if gas is low, there is almost certainly a microscopic leak or flare joint seepage. Coolronix conducts proper leak checks before refilling with certified R32, R410A, or R22 refrigerants.',
        acTypes: [
            'Split AC',
            'Window AC',
            'Inverter AC'
        ],
        serviceCategory: 'gas',
        warranties: [
            'Gas charging: 60 days warranty'
        ],
        commonProblems: [
            {
                title: 'Ice or frost formation on copper pipes',
                description: 'Low refrigerant causes evaporator pressure to plummet below freezing.'
            },
            {
                title: 'Hissing sound near indoor unit or valves',
                description: 'Refrigerant escaping through fractured flare nuts or valve cores.'
            },
            {
                title: 'AC outdoor unit running without cooling',
                description: 'Compressor runs continuously while room temperature barely drops.'
            },
            {
                title: 'Spike in electricity bills with diminished cooling',
                description: 'Undercharged system forces compressor to work harder for longer cycles.'
            }
        ],
        whatIsIncluded: [
            'Digital or manifold gauge pressure evaluation (standing & suction pressure)',
            'Leak detection test at flare connections, service valves, and U-bends',
            'Nitrogen pressure testing if micro-leak is suspected',
            'Deep system evacuation (vacuuming) to eliminate moisture and non-condensables',
            'Refrigerant charging weighed to manufacturer specification (R32, R410A, R22)',
            'Post-fill amp draw verification and temperature split measurement'
        ],
        benefits: [
            {
                title: 'Leak Check First',
                description: 'We do not simply dump gas into a leaking system; we identify and secure connection points.'
            },
            {
                title: 'Pure Grade Refrigerants',
                description: 'Zero contamination, protecting compressor oil stability and heat transfer performance.'
            },
            {
                title: 'Optimal Cooling Return',
                description: 'Restore peak cooling capacity and lower continuous compressor electricity consumption.'
            }
        ],
        process: [
            {
                step: '01',
                title: 'Pressure Assessment',
                description: 'Technician connects brass manifold gauges to measure baseline suction pressure.'
            },
            {
                step: '02',
                title: 'Leak Pinpointing',
                description: 'Soap bubble or electronic sniffing applied along copper flare joints and service ports.'
            },
            {
                step: '03',
                title: 'Joint Tightening & Vacuuming',
                description: 'Loose flare nuts flared/tightened and moisture removed using vacuum pump.'
            },
            {
                step: '04',
                title: 'Calibrated Gas Charging',
                description: 'Refrigerant added while monitoring suction PSI and outdoor compressor ampere draw.'
            }
        ],
        faqs: [
            {
                question: 'How do I know if my AC truly needs gas refill?',
                answer: 'Tell-tale signs include ice/frost accumulation on the thin copper line, warm airflow from vents despite the compressor running, and a hissing noise. A proper pressure gauge check by Coolronix confirms the exact PSI.'
            },
            {
                question: 'Is it dangerous to recharge AC gas without fixing leaks?',
                answer: 'Yes. Adding gas without fixing leaks wastes your money, harms cooling efficiency, and can cause the compressor to burn out due to lack of returning refrigerant oil.'
            },
            {
                question: 'What types of refrigerants does Coolronix handle in Hyderabad?',
                answer: 'We handle R32 (eco-friendly standard in modern inverters), R410A (twin-rotary inverters), and R22 (older non-inverter systems).'
            }
        ]
    },
    {
        id: '3',
        number: '03',
        slug: 'ac-pre-piping',
        title: 'AC Pre-Piping',
        shortDescription: 'Professional copper piping and drainage preparation for new AC installations.',
        heroHeadline: 'AC Pre-Piping in Hyderabad',
        heroHighlight: 'The Right Foundation for a Clean AC Installation.',
        intro: 'Coolronix provides professional AC pre-piping for new homes, offices, renovations, and spaces where the copper line and drain route should be prepared before the AC units are installed. Proper pipe sizing, insulation, drainage slope, and routing help reduce future leakage and installation problems.',
        acTypes: [
            'Split AC',
            'Inverter AC',
            'New Construction',
            'Renovation Projects'
        ],
        serviceCategory: 'pre-piping',
        commonProblems: [
            {
                title: 'Planning AC piping before interior work',
                description: 'Prepare concealed copper and drain routes before walls, false ceilings, or finishing work is completed.'
            },
            {
                title: 'Poorly routed copper piping',
                description: 'Incorrect pipe routing can create bends, service difficulties, and future leakage risks.'
            },
            {
                title: 'Incorrect drain slope',
                description: 'Poor drainage planning can lead to water leakage and condensate backflow.'
            },
            {
                title: 'Insufficient pipe insulation',
                description: 'Improper insulation can reduce efficiency and cause condensation around the pipe route.'
            }
        ],
        whatIsIncluded: [
            'Site inspection and AC pipe-route planning',
            'Copper pipe routing and proper insulation',
            'Condensate drain pipe routing with suitable slope',
            'Wall/ceiling route coordination for concealed piping',
            'End-point protection and identification for future AC installation',
            'Final route and connection-point inspection'
        ],
        benefits: [
            {
                title: 'Main Focus Service',
                description: 'Purpose-built pre-piping support for customers planning AC installation during construction or renovation.'
            },
            {
                title: 'Cleaner Installation',
                description: 'Properly planned routes help keep copper and drain lines organized and reduce visible wiring or piping.'
            },
            {
                title: 'Future-Ready',
                description: 'Correct pipe endpoints make the later AC installation process easier and more efficient.'
            }
        ],
        process: [
            {
                step: '01',
                title: 'Site Assessment',
                description: 'We inspect the room layout, AC location, outdoor-unit position, and practical pipe route.'
            },
            {
                step: '02',
                title: 'Route Planning',
                description: 'Copper and drain routes are planned with suitable bends, slope, insulation, and access points.'
            },
            {
                step: '03',
                title: 'Pre-Piping Work',
                description: 'The piping and drainage route is installed and protected according to the planned layout.'
            },
            {
                step: '04',
                title: 'Final Inspection',
                description: 'We check the route, endpoints, drainage arrangement, and readiness for future AC installation.'
            }
        ],
        faqs: [
            {
                question: 'What is AC pre-piping?',
                answer: 'AC pre-piping is the preparation of copper refrigerant lines, insulation, and condensate drainage routes before the AC indoor and outdoor units are installed.'
            },
            {
                question: 'When should AC pre-piping be done?',
                answer: 'It is commonly planned during new construction, renovation, or interior work so the piping can be routed neatly before final walls, ceilings, and finishes are completed.'
            },
            {
                question: 'Can Coolronix do pre-piping for inverter split ACs?',
                answer: 'Yes. Coolronix can plan pre-piping for compatible Split and Inverter AC installations based on the site layout and required pipe route.'
            }
        ]
    },
    {
        id: '4',
        number: '04',
        slug: 'ac-installation',
        title: 'AC Installation',
        shortDescription: 'Professional AC installation for your cooling setup.',
        heroHeadline: 'Professional AC Installation in Hyderabad',
        heroHighlight: 'Precision Mounting & Leak-Proof Flaring.',
        intro: 'Improper installation accounts for over 70% of premature AC breakdowns and gas leakages. Coolronix ensures perfect level mounting, vibration isolation, insulated copper runs, and thorough vacuuming for new or relocated units.',
        acTypes: [
            'Split AC (0.8T to 2.5T)',
            'Window AC',
            'New Units',
            'Relocation & Uninstallation'
        ],
        serviceCategory: 'installation',
        warranties: [
            'AC installation: 2 weeks warranty'
        ],
        commonProblems: [
            {
                title: 'Vibrations rattling through bedroom walls',
                description: 'Unbalanced wall brackets or absence of rubber anti-vibration dampers.'
            },
            {
                title: 'Indoor water dripping inside the room',
                description: 'Improper downward gradient on the condensate drain pipe.'
            },
            {
                title: 'Premature gas leaks after recent relocation',
                description: 'Poor flare nut threading, overtightening, or uninsulated pipe bends.'
            },
            {
                title: 'Sub-par cooling in brand new AC',
                description: 'Failure to vacuum copper lines prior to releasing refrigerant.'
            }
        ],
        whatIsIncluded: [
            'Indoor unit metal backplate spirit-level alignment and heavy-duty anchoring',
            'Core hole drilling with proper outward slope for condensation drainage',
            'Outdoor heavy gauge L-bracket mounting with vibration dampeners',
            'Copper tubing flare connection, pressure tightening, and UV insulation wrapping',
            'System vacuuming to clear moisture prior to opening refrigerant valves',
            'Safe electrical wiring termination to designated 16A/20A power outlet'
        ],
        benefits: [
            {
                title: 'Zero Wall Vibration',
                description: 'Sturdy bracket anchoring with heavy-duty fasteners prevents hums and wall stress.'
            },
            {
                title: 'Proper Drainage Slope',
                description: 'Guarantees condensation water drains completely outside with no indoor overflows.'
            },
            {
                title: 'Factory-Grade Vacuuming',
                description: 'Crucial for inverter units to ensure optimum compressor longevity and energy savings.'
            }
        ],
        process: [
            {
                step: '01',
                title: 'Site Survey & Placement',
                description: 'Determine optimal indoor airflow dispersion and outdoor heat rejection location.'
            },
            {
                step: '02',
                title: 'Drilling & Bracket Mount',
                description: 'Spirit-level alignment and secure fixing of indoor backplate and outdoor stand.'
            },
            {
                step: '03',
                title: 'Piping & Flare Fitting',
                description: 'Flaring copper tubes, insulating lines, and routing drain line with continuous drop.'
            },
            {
                step: '04',
                title: 'Vacuum & Performance Test',
                description: 'Evacuation, refrigerant release, electrical check, and 20-minute run test.'
            }
        ],
        faqs: [
            {
                question: 'Do you also provide AC uninstallation in Hyderabad?',
                answer: 'Yes! We provide safe AC uninstallation with proper refrigerant pump-down, ensuring no gas is lost when moving your AC.'
            },
            {
                question: 'What wall thickness and mounting hardware do you use?',
                answer: 'We use heavy-gauge powder-coated outdoor brackets with high-tensile anchor bolts suited for concrete and brick walls commonly found in Hyderabad homes.'
            },
            {
                question: 'How long does a standard Split AC installation take?',
                answer: 'A standard split AC installation typically takes between 2 to 3 hours depending on copper pipe distance and outdoor unit accessibility.'
            }
        ]
    },
    {
        id: '5',
        number: '05',
        slug: 'ac-maintenance',
        title: 'AC Maintenance',
        shortDescription: 'Regular servicing and maintenance to help keep your AC performing well.',
        heroHeadline: 'Comprehensive AC Maintenance in Hyderabad',
        heroHighlight: 'Deep Coil Jet Cleaning & Health Check.',
        intro: 'Hyderabad dust, pollen, and airborne pollution quickly coat cooling coils with grime, choking airflow and forcing your compressor to consume up to 30% more power. Coolronix comprehensive maintenance restores airflow, freshens air, and protects internal components.',
        acTypes: [
            'Split AC',
            'Window AC',
            'Inverter Systems',
            'Annual Preventative Care'
        ],
        serviceCategory: 'maintenance',
        warranties: [
            'AC service: 2 weeks warranty'
        ],
        commonProblems: [
            {
                title: 'Weak, sluggish airflow from louvers',
                description: 'Blower wheel clogged with caked-on dust and fungal growth.'
            },
            {
                title: 'Musty or stale odor upon switching on',
                description: 'Stagnant water in condensate tray and mildew on cooling fins.'
            },
            {
                title: 'Outdoor unit overheating and cutting off',
                description: 'Condenser fins blocked with dust, preventing heat exhaust.'
            },
            {
                title: 'Sudden unexpected breakdowns during peak summer',
                description: 'Unserviced capacitors or loose terminals overheating under heavy loads.'
            }
        ],
        whatIsIncluded: [
            'High-pressure water jet washing with waterproof service jacket protection',
            'Evaporator coil and condenser coil deep cleansing',
            'Air filter removal, antimicrobial wash, and reinstall',
            'Blower cylinder drum cleaning and fan blade de-dusting',
            'Condensate drain tray flush and anti-clog pipe clearance',
            'Operating electrical voltage, capacitor value, and running ampere test'
        ],
        benefits: [
            {
                title: 'Lower Electricity Bills',
                description: 'Clean coils allow the AC to cool rooms up to 40% faster, cutting compressor run times.'
            },
            {
                title: 'Cleaner, Healthier Air',
                description: 'Eliminates dust mites, airborne allergens, and musty mildew odors from your room.'
            },
            {
                title: 'Prevents Costly Breakdowns',
                description: 'Identifies minor wiring looseness or capacitor degradation before it burns the compressor.'
            }
        ],
        process: [
            {
                step: '01',
                title: 'Protection Setup',
                description: 'Protective waterproof spill jacket mounted around indoor unit to safeguard walls and furniture.'
            },
            {
                step: '02',
                title: 'Jet Wash & Coil Clean',
                description: 'Gentle pressurized water jet flushes deep dirt from delicate aluminum cooling fins.'
            },
            {
                step: '03',
                title: 'Blower & Drain Clearing',
                description: 'Blower drum cleaned of grime; drain line flushed to prevent indoor water overflows.'
            },
            {
                step: '04',
                title: 'Outdoor Condenser Wash',
                description: 'Outdoor unit cleaned to guarantee efficient heat expulsion into the open air.'
            }
        ],
        faqs: [
            {
                question: 'How often should I service my AC in Hyderabad?',
                answer: 'Given the dry dusty summers and pre-monsoon humidity in Hyderabad, servicing your AC twice a year (once before summer and once post-monsoon) is recommended for optimal efficiency.'
            },
            {
                question: 'Will water spray damage my indoor walls during cleaning?',
                answer: 'Not at all. We use a specialized wrap-around waterproof wash bag with a drainage funnel that channels all water directly into a bucket.'
            },
            {
                question: 'Does regular maintenance help lower my electricity bills?',
                answer: 'Absolutely. A clean AC transfers heat far more efficiently, allowing the room to reach your target temperature faster and reducing compressor run hours.'
            }
        ]
    },
    {
        id: '6',
        number: '06',
        slug: 'split-ac-service',
        title: 'Split AC Service',
        shortDescription: 'Service and repair for Split AC systems.',
        heroHeadline: 'Split AC Service & Repair in Hyderabad',
        heroHighlight: 'Specialized Care for Indoor & Outdoor Units.',
        intro: 'Modern Split ACs rely on sophisticated electronic PCBs, twin-rotary inverter compressors, and dual indoor-outdoor architectures. Coolronix technicians understand the intricacies of split cooling mechanics, delivering dedicated repair and service across Hyderabad.',
        acTypes: [
            'Inverter Split AC',
            'Fixed Speed Split AC',
            '1 Ton, 1.5 Ton, 2 Ton'
        ],
        serviceCategory: 'split',
        commonProblems: [
            {
                title: 'Water overflowing from indoor front cover',
                description: 'Blocked drain hose, cracked drain pan, or algae sludge in tray.'
            },
            {
                title: 'PCB display flashing error codes (E1, E4, etc.)',
                description: 'Sensor failure, communication error between units, or voltage fluctuations.'
            },
            {
                title: 'Indoor fan spinning but outdoor unit silent',
                description: 'Defective outdoor contactor, start capacitor, or inverter module fault.'
            },
            {
                title: 'Uneven cooling and poor room throw',
                description: 'Swing motor gear failure or heavily clogged cross-flow fan drum.'
            }
        ],
        whatIsIncluded: [
            'Indoor unit casing removal and ultrasonic/jet deep wash',
            'Cross-flow blower wheel de-dusting for uniform air throw',
            'Outdoor unit condenser coil jet wash and heat dissipation check',
            'Communication wire and terminal screw tightening',
            'Refrigerant flare connection inspection and pressure audit',
            'Swing flap louver and remote control sensor responsiveness check'
        ],
        benefits: [
            {
                title: 'Split AC Specialists',
                description: 'In-depth experience handling copper line flaring and multi-sensor inverter PCBs.'
            },
            {
                title: 'No-Mess In-Room Servicing',
                description: 'Complete water-capture kit protects painted walls, curtains, and flooring.'
            },
            {
                title: 'Whisper-Quiet Operation',
                description: 'Balancing blower wheels and securing chassis panels stops annoying humming.'
            }
        ],
        process: [
            {
                step: '01',
                title: 'Operational Baseline',
                description: 'Test remote commands, swing action, and temperature drop across intake and discharge.'
            },
            {
                step: '02',
                title: 'Dual Unit Cleaning',
                description: 'Full jet wash for indoor evaporator fins followed by outdoor condenser wash.'
            },
            {
                step: '03',
                title: 'Electronics & Sensor Audit',
                description: 'Check room ambient thermistor and coil sensor resistance for accurate cut-off.'
            },
            {
                step: '04',
                title: 'Drain & Seal Check',
                description: 'Pour test through drain tray to guarantee unhindered outdoor water disposal.'
            }
        ],
        faqs: [
            {
                question: 'Why does water leak inside the room from my Split AC?',
                answer: 'The most common cause is dirt, algae, or dust accumulation blocking the narrow condensate drain line, forcing water to spill over the internal drain tray onto your wall.'
            },
            {
                question: 'Can you service inverter Split ACs from LG, Daikin, Voltas, Samsung, and Blue Star?',
                answer: 'Yes, our technicians service all major Indian and international Split AC brands across Hyderabad.'
            },
            {
                question: 'Does Split AC servicing require taking the unit down from the wall?',
                answer: 'Standard periodic jet servicing is performed directly on the wall using our protective wash bag system, avoiding unnecessary stress on copper flare joints.'
            }
        ]
    },
    {
        id: '7',
        number: '07',
        slug: 'window-ac-service',
        title: 'Window AC Service',
        shortDescription: 'Service and repair for Window AC units.',
        heroHeadline: 'Window AC Service & Repair in Hyderabad',
        heroHighlight: 'Rugged Chassis Care, Coil Cleaning & Motor Maintenance.',
        intro: 'Window ACs are durable cooling workhorses, but because the compressor, condenser, and evaporator are packed into a single compact chassis, dust accumulation can drastically choke heat exchange. Coolronix provides thorough Window AC overhaul and repair across Hyderabad.',
        acTypes: [
            'Window AC (0.75T to 2.0T)',
            'Rotary & Reciprocating Compressors'
        ],
        serviceCategory: 'window',
        commonProblems: [
            {
                title: 'Excessive rattling and chassis vibration',
                description: 'Loose window frame mounting, worn fan motor rubber mounts, or rusted base tray.'
            },
            {
                title: 'Water pooling on windowsill',
                description: 'Backward tilt causing condensate to flow into the room instead of out.'
            },
            {
                title: 'Frequent compressor cut-off on hot afternoons',
                description: 'Condenser coils packed with mud, triggering thermal overload protection.'
            },
            {
                title: 'Fan speed stuck or not changing',
                description: 'Selector switch worn out, faulty capacitor, or blower motor bearing friction.'
            }
        ],
        whatIsIncluded: [
            'Safe chassis unmounting or slide-out from window wooden/aluminum casing',
            'High-pressure chemical and water jet wash of both front evaporator and rear condenser',
            'Double-shaft motor bearing inspection and lubrication',
            'Base tray rust check and drainage hole clearing',
            'Rotary selector / electronic keypad testing and capacitor health check',
            'Level and tilt re-installation to ensure continuous exterior water drip'
        ],
        benefits: [
            {
                title: 'Heavy-Duty Coil Cleaning',
                description: 'Removes deep-seated dirt from the rear condenser that typical surface wiping cannot reach.'
            },
            {
                title: 'Reduced Noise & Vibration',
                description: 'Firm window mount re-seating and motor shaft balancing drastically cuts operating noise.'
            },
            {
                title: 'Extended Unit Lifespan',
                description: 'Rust prevention and clean coils prevent catastrophic compressor burnout.'
            }
        ],
        process: [
            {
                step: '01',
                title: 'Safety Slide-Out',
                description: 'Unit safely unlocked and slid out from sleeve with electrical supply isolated.'
            },
            {
                step: '02',
                title: 'Complete Jet Wash',
                description: 'Front and rear coils washed thoroughly, clearing impacted dirt and road dust.'
            },
            {
                step: '03',
                title: 'Motor & Electrical Check',
                description: 'Shaft lubricated, capacitor tested for rated microfarads, wiring insulated.'
            },
            {
                step: '04',
                title: 'Tilt-Aligned Re-Mount',
                description: 'Reinstalled into window sleeve with slight outward tilt for smooth water drainage.'
            }
        ],
        faqs: [
            {
                question: 'Why does my Window AC make a loud rattling noise?',
                answer: 'Loud rattling usually stems from vibration against an insecure window frame, dried rubber grommets under the compressor, or debris stuck in the outdoor fan blade.'
            },
            {
                question: 'Should water come out of the back of a Window AC?',
                answer: 'Yes! While modern window ACs use a slinger ring to splash water onto the condenser coil, excess water must drain freely from the rear plug to avoid stagnant pooling and rust.'
            },
            {
                question: 'Do you carry out Window AC service at home in Hyderabad?',
                answer: 'Yes, our technicians perform on-site Window AC servicing at your balcony, terrace, or bathroom wash area with minimal disruption.'
            }
        ]
    }
];
const AC_PROBLEMS = [
    {
        number: '01',
        title: 'AC Not Cooling',
        description: 'Cooling performance has dropped or the AC is not cooling properly.',
        suggestedServiceSlug: 'ac-repair-service'
    },
    {
        number: '02',
        title: 'AC Needs Gas Refill',
        description: 'Get AC gas refill or charging service when your system requires it.',
        suggestedServiceSlug: 'ac-gas-refill'
    },
    {
        number: '03',
        title: 'Water Leakage',
        description: 'Get your AC checked when water leakage becomes a problem.',
        suggestedServiceSlug: 'split-ac-service'
    },
    {
        number: '04',
        title: 'AC Not Starting',
        description: 'Contact Coolronix when your AC is not turning on properly.',
        suggestedServiceSlug: 'ac-repair-service'
    },
    {
        number: '05',
        PoorAirflow: true,
        title: 'Poor Airflow',
        description: 'Get AC service when airflow or cooling performance is affected.',
        suggestedServiceSlug: 'ac-maintenance'
    },
    {
        number: '06',
        title: 'AC Needs Maintenance',
        description: 'Regular AC maintenance can help keep your system serviced.',
        suggestedServiceSlug: 'ac-maintenance'
    }
];
const CUSTOMER_REVIEWS = [
    {
        number: '01',
        quote: 'Best Service at Affordable Price',
        source: 'GOOGLE REVIEW',
        rating: 5
    },
    {
        number: '02',
        quote: 'Good work I recommend everyone to utilise there service',
        source: 'GOOGLE REVIEW',
        rating: 5
    },
    {
        number: '03',
        quote: 'Good experience I like you',
        source: 'GOOGLE REVIEW',
        rating: 5
    }
];
}),
];

//# sourceMappingURL=_1czej1t._.js.map