import type { Metadata } from "next";
import AuditReport from "./AuditReport";

export const metadata: Metadata = {
  title: "The 20-Year Audit | EPA Aftertreatment Retrospective",
  description:
    "EPA Aftertreatment Retrospective: 20 years of evidence. In December 2000, EPA projected the 2007-2010 heavy-duty diesel aftertreatment mandates would add roughly $4,600 in lifetime operating costs. Dealer invoices, fleet ledgers, and EPA's own reversals tell a different story. The complete record, compiled.",
};

export default function AuditPage() {
  return <AuditReport />;
}
