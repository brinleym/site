export interface ProjectMetadata {
  url: string;
  title: string;
  organization: string | undefined;
};

export function getProjectsData() {
    return [
        {
            id: "navigator",
            url: "https://www.meta.com/help/quest/133727602066940",
            title: "Navigator",
            organization: "Meta"
        },
        {
            id: "shopify",
            url: "https://apps.shopify.com/whatsapp",
            title: "WhatsApp x Shopify",
            organization: "Meta"
        },
        {
            id: "podcast",
            url: "https://drive.google.com/drive/folders/1LL9-VcpsKsjjH1Z-ElHGW-yYQSxW35oP?usp=sharing",
            title: "Podcast",
            organization: "MITRE"
        },
    ]
}