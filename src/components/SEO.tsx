import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    schema?: any;
    noindex?: boolean;
}

const SEO = ({ title, description, canonical, schema, noindex }: SEOProps) => {
    useEffect(() => {
        // 1. Update Title
        document.title = title;

        // 2. Update Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.setAttribute("name", "description");
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute("content", description);

        // 3. Update Canonical Link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            // Clean double slashes while preserving the protocol prefix
            let cleanedCanonical = canonical;
            const protocolIndex = canonical.indexOf("://");
            if (protocolIndex !== -1) {
                const protocol = canonical.substring(0, protocolIndex + 3);
                const rest = canonical.substring(protocolIndex + 3).replace(/\/+/g, "/");
                cleanedCanonical = protocol + rest;
            }

            if (!canonicalLink) {
                canonicalLink = document.createElement("link");
                canonicalLink.setAttribute("rel", "canonical");
                document.head.appendChild(canonicalLink);
            }
            canonicalLink.setAttribute("href", cleanedCanonical);
        } else if (canonicalLink) {
            canonicalLink.remove();
        }

        // 4. Update Schema.org JSON-LD
        let scriptTag = document.getElementById("json-ld-schema");
        if (schema) {
            if (!scriptTag) {
                scriptTag = document.createElement("script");
                scriptTag.setAttribute("type", "application/ld+json");
                scriptTag.setAttribute("id", "json-ld-schema");
                document.head.appendChild(scriptTag);
            }
            scriptTag.textContent = JSON.stringify(schema);
        } else if (scriptTag) {
            scriptTag.remove();
        }

        // 5. Update robots meta tag based on noindex prop
        let robotsMeta = document.querySelector('meta[name="robots"]');
        if (!robotsMeta) {
            robotsMeta = document.createElement("meta");
            robotsMeta.setAttribute("name", "robots");
            document.head.appendChild(robotsMeta);
        }

        if (noindex) {
            robotsMeta.setAttribute("content", "noindex, nofollow");
        } else {
            robotsMeta.setAttribute("content", "index, follow");
        }

    }, [title, description, canonical, schema, noindex]);

    return null; // Side-effect only component
};

export default SEO;
