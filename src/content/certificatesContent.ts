import efsetEnglishPdf from "../assets/pdf/certificates/efset-english.pdf";
import bluepexPdf from "../assets/pdf/certificates/bluepex.pdf";
import bluepexOpenCommunityPdf from "../assets/pdf/certificates/bluepex-open-community.pdf";
import bluepexNetworksPdf from "../assets/pdf/certificates/bluepex-networks.pdf";
import bluepexFirewallsPdf from "../assets/pdf/certificates/bluepex-firewalls.pdf";
import udemyCppPdf from "../assets/pdf/certificates/udemy-cpp.pdf";
import simplilearnN8nPdf from "../assets/pdf/certificates/simplilearn-n8n.pdf";
import cursaLaravelPdf from "../assets/pdf/certificates/cursa-laravel.pdf";
import ifscDockerPdf from "../assets/pdf/certificates/ifsc-docker.pdf";
import ifscSecurityPdf from "../assets/pdf/certificates/ifsc-security.pdf";
import ifscAiAgentsPdf from "../assets/pdf/certificates/ifsc-ai-agents.pdf";
import ifscItManagementPdf from "../assets/pdf/certificates/ifsc-it-management.pdf";
import ifscInteractionDesignPdf from "../assets/pdf/certificates/ifsc-interaction-design.pdf";
import simplilearnDjangoPdf from "../assets/pdf/certificates/simplilearn-django.pdf";
import simplilearnNodePdf from "../assets/pdf/certificates/simplilearn-node.pdf";
import aluraAiPdf from "../assets/pdf/certificates/alura-ai.pdf";
import startupWeekendPdf from "../assets/pdf/certificates/startup-weekend.pdf";

export interface CertificateItem {
  id:
    | "efset-english"
    | "bluepex"
    | "bluepex-open-community"
    | "bluepex-networks"
    | "bluepex-firewalls"
    | "udemy-cpp"
    | "simplilearn-n8n"
    | "cursa-laravel"
    | "ifsc-docker"
    | "ifsc-security"
    | "ifsc-ai-agents"
    | "ifsc-it-management"
    | "ifsc-interaction-design"
    | "simplilearn-django"
    | "simplilearn-node"
    | "alura-ai"
    | "startup-weekend";
  file: string;
  credential?: string;
}

export const certificatesContent: CertificateItem[] = [
  {
    id: "efset-english",
    file: efsetEnglishPdf,
    credential: "https://cert.efset.org/iQYKjR",
  },
  {
    id: "bluepex",
    file: bluepexPdf,
    credential: "https://bluepex.eadplataforma.app/certificate/view/27Av1c/2026-06-01",
  },
  {
    id: "udemy-cpp",
    file: udemyCppPdf,
    credential: "https://ude.my/UC-e90f39f3-3e15-42b4-8856-ab2076249f32",
  },
  {
    id: "simplilearn-n8n",
    file: simplilearnN8nPdf,
    credential: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0OTUxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTY2NTU5MF84OTk4ODI5XzE3NjcyNDQ1NTU5NTIucG5nIiwidXNlcm5hbWUiOiJUaGlhZ28gTWFydGlucyJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7958%2Fn8n%2520Course%3A%2520No%2520Code%2520AI%2520Agent%2520Builder%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1639770127916319526&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FV9wwzSE4PDgqoikqyrytKTUstKsrMS49PKsovL04tsvXJzMtOTfHMAwCPDTrtQQAAAA%3D%3D"
  },
  {
    id: "cursa-laravel",
    file: cursaLaravelPdf,
    credential: "https://cursa.app/en/my-certificate/cert6440b07267b74831eb483ee689768ec4"
  },
  {
    id: "simplilearn-django",
    file: simplilearnDjangoPdf,
    credential: "https://simpli-web.app.link/e/ez4PIryki7b"
  },
  {
    id: "simplilearn-node",
    file: simplilearnNodePdf,
    credential: "https://simpli-web.app.link/e/kkmIwdBki7b"
  },
  {
    id: "alura-ai",
    file: aluraAiPdf,
  },
  {
    id: "bluepex-networks",
    file: bluepexNetworksPdf,
    credential: "https://bluepex.eadplataforma.app/certificate/view/jugrqn/2026-08-29"
  },
  {
    id: "bluepex-firewalls",
    file: bluepexFirewallsPdf,
    credential: "https://bluepex.eadplataforma.app/certificate/view/wy5287/2026-08-24"
  },
  {
    id: "bluepex-open-community",
    file: bluepexOpenCommunityPdf,
    credential: "https://bluepex.eadplataforma.app/certificate/view/vo5A9g/2026-08-23"
  },
  {
    id: "ifsc-docker",
    file: ifscDockerPdf,
  },
  {
    id: "ifsc-security",
    file: ifscSecurityPdf,
  },
  {
    id: "ifsc-ai-agents",
    file: ifscAiAgentsPdf,
  },
  {
    id: "ifsc-it-management",
    file: ifscItManagementPdf,
  },
  {
    id: "ifsc-interaction-design",
    file: ifscInteractionDesignPdf,
  },
  {
    id: "startup-weekend",
    file: startupWeekendPdf,
    credential: "https://www.sympla.com.br/baixar-certificado/7MfYsRk7DZMvPvxBxb6Mt5mGeXavboJB-5T_LCGqpFY"
  },
];
