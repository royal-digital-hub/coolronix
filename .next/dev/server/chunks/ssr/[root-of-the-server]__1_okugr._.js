module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$page$2d$components$2f$ServiceDetailPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/page-components/ServiceDetailPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/servicesData.ts [app-rsc] (ecmascript)");
;
;
;
;
const SITE_URL = 'https://coolronix.in';
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICES_DATA"].map((service)=>({
            slug: service.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICES_DATA"].find((item)=>item.slug === slug);
    if (!service) {
        return {
            title: 'Service Not Found',
            robots: {
                index: false,
                follow: false
            }
        };
    }
    return {
        title: service.heroHeadline,
        description: `${service.shortDescription} Professional on-site service across Hyderabad by Coolronix. Call 093928 73096.`,
        alternates: {
            canonical: `/services/${service.slug}`
        }
    };
}
async function Page({ params }) {
    const { slug } = await params;
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICES_DATA"].find((item)=>item.slug === slug);
    if (!service) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}/services/${service.slug}#service`,
        name: service.title,
        description: service.shortDescription,
        url: `${SITE_URL}/services/${service.slug}`,
        serviceType: service.title,
        provider: {
            '@type': 'HVACBusiness',
            '@id': `${SITE_URL}/#business`,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name,
            telephone: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phoneRaw,
            url: SITE_URL
        },
        ...service.warranties?.length ? {
            warranty: service.warranties.join('; ')
        } : {},
        areaServed: {
            '@type': 'City',
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].city
        }
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: SITE_URL
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: `${SITE_URL}/services`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: service.title,
                item: `${SITE_URL}/services/${service.slug}`
            }
        ]
    };
    const faqSchema = service.faqs.length ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq)=>({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }))
    } : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify([
                        serviceSchema,
                        breadcrumbSchema,
                        ...faqSchema ? [
                            faqSchema
                        ] : []
                    ])
                }
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$page$2d$components$2f$ServiceDetailPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ServiceDetailPage"], {
                slug: service.slug
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/[slug]/page.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/page-components/ServiceDetailPage.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceDetailPage",
    ()=>ServiceDetailPage
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ServiceDetailPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ServiceDetailPage() from the server but ServiceDetailPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/page-components/ServiceDetailPage.tsx", "ServiceDetailPage");
}),
"[project]/src/page-components/ServiceDetailPage.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceDetailPage",
    ()=>ServiceDetailPage
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ServiceDetailPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ServiceDetailPage() from the server but ServiceDetailPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/page-components/ServiceDetailPage.tsx <module evaluation>", "ServiceDetailPage");
}),
"[project]/src/page-components/ServiceDetailPage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$page$2d$components$2f$ServiceDetailPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/page-components/ServiceDetailPage.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$page$2d$components$2f$ServiceDetailPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/page-components/ServiceDetailPage.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$page$2d$components$2f$ServiceDetailPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1_okugr._.js.map