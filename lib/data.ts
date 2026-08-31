import { LegalCase } from "./types";

export const cases: LegalCase[] = [
  {
    id: "okafor-v-frn",
    name: "Okafor v. Federal Republic of Nigeria",
    citation: "(2019) LPELR-47231(CA)",
    court: "Court of Appeal, Lagos Division",
    judge: "Hon. Justice A. B. Umar, JCA",
    dateDecided: "14 March 2019",
    practiceArea: ["Evidence", "Criminal Law", "Cybercrime"],
    parties: [
      { name: "Chinedu Okafor", role: "Appellant", counsel: "F. Adeleke, SAN" },
      { name: "Federal Republic of Nigeria", role: "Respondent", counsel: "Office of the DPP" },
    ],
    summary:
      "The Court of Appeal considered whether printouts of WhatsApp messages and bank transfer alerts, tendered without a certificate of compliance under the Evidence Act, were properly admitted at trial as evidence of a fraud scheme.",
    keyPrinciples: [
      "Electronic evidence is admissible only where accompanied by a certificate of compliance under Section 84 of the Evidence Act 2011, unless the maker of the statement is called to give oral evidence.",
      "A trial court may not rely on unauthenticated computer-generated documents to found a conviction where the foundation requirements are contested by the defence.",
      "Where the prosecution fails to lay proper foundation for electronic evidence, the appellate court will discountenance that evidence but may still affirm conviction if other evidence sufficiently proves the charge.",
    ],
    outcome:
      "Appeal allowed in part. The WhatsApp printouts were excluded for want of a Section 84 certificate; conviction was nonetheless affirmed on the strength of the oral testimony of the bank's fraud desk officer.",
    relatedCaseIds: ["adeyemi-v-state", "zenith-v-okeke"],
    riskFlags: [
      "Do not rely solely on this authority for admissibility of chat evidence without also citing a case where the certificate requirement was actually satisfied.",
    ],
    documents: [
      {
        id: "okafor-judgment",
        caseId: "okafor-v-frn",
        type: "Judgment",
        title: "Judgment of the Court of Appeal",
        pages: 22,
        filedDate: "14 March 2019",
        excerpt:
          "It is trite that the burden is on the party seeking to tender a computer-generated document to lay the foundation required by Section 84(2) of the Evidence Act, and mere production of a printout, without more, cannot suffice.",
        fullText: [
          "This is an appeal against the judgment of the Federal High Court, Lagos Division, delivered on 9 November 2017, convicting the Appellant on three counts of obtaining property by false pretences contrary to the Advance Fee Fraud and Other Fraud Related Offences Act.",
          "At trial, the prosecution tendered Exhibit P7, a bundle of WhatsApp chat printouts, through the Investigating Police Officer, who was not the maker of the messages and had no personal knowledge of the device from which they were extracted.",
          "It is trite that the burden is on the party seeking to tender a computer-generated document to lay the foundation required by Section 84(2) of the Evidence Act, and mere production of a printout, without more, cannot suffice.",
          "Learned counsel for the Appellant submitted, and we agree, that no certificate of compliance accompanied Exhibit P7, and no evidence was led to satisfy the four conditions set out in Section 84(2)(a)-(d).",
          "We are accordingly satisfied that the trial court erred in admitting and acting upon Exhibit P7. That exhibit is hereby expunged from the record.",
          "However, this does not dispose of the appeal. PW3, an officer of the complainant bank, gave direct oral evidence of the fraudulent transfer instructions and identified the Appellant as the beneficiary of three transactions traced through the bank's own audited ledgers, which were properly certified and admitted as Exhibit P9.",
          "Where, as here, evidence independent of the excluded exhibit is sufficient to sustain a conviction, an appellate court will not disturb the conviction merely because one strand of evidence was wrongly admitted.",
          "The appeal succeeds only to the extent that Exhibit P7 is expunged. The conviction and sentence are otherwise affirmed.",
        ],
      },
      {
        id: "okafor-affidavit",
        caseId: "okafor-v-frn",
        type: "Affidavit",
        title: "Affidavit in Support of Notice of Appeal",
        pages: 6,
        filedDate: "2 December 2017",
        excerpt:
          "That I am reliably informed by my counsel, F. Adeleke SAN, and verily believe that the electronic messages relied upon at trial were never certified in accordance with the Evidence Act 2011.",
        fullText: [
          "I, Chinedu Okafor, male, Nigerian citizen, of No. 14 Adisa Close, Surulere, Lagos, do make oath and state as follows.",
          "That I am the Appellant in this matter and by virtue of my position am conversant with the facts deposed to herein.",
          "That I am reliably informed by my counsel, F. Adeleke SAN, and verily believe that the electronic messages relied upon at trial were never certified in accordance with the Evidence Act 2011.",
          "That the said messages formed the sole basis upon which the trial court founded its finding of intent.",
          "That I depose to this affidavit in good faith and in accordance with the Oaths Act.",
        ],
      },
    ],
  },
  {
    id: "adeyemi-v-state",
    name: "Adeyemi v. State",
    citation: "(2021) LPELR-53410(CA)",
    court: "Court of Appeal, Ibadan Division",
    judge: "Hon. Justice R. T. Bello, JCA",
    dateDecided: "8 June 2021",
    practiceArea: ["Evidence", "Criminal Law"],
    parties: [
      { name: "Bolanle Adeyemi", role: "Appellant", counsel: "K. Osagie" },
      { name: "State", role: "Respondent", counsel: "Ministry of Justice, Oyo State" },
    ],
    summary:
      "The Court of Appeal examined whether SMS messages retrieved directly from a complainant's phone and shown to the court in open session, with the phone tendered as the primary device, required a separate certificate of compliance.",
    keyPrinciples: [
      "Where the original electronic device itself is tendered and the content is directly perceived by the court, the strict certificate requirement under Section 84 may not apply in the same way as it does to secondary printouts.",
      "A witness who authored the electronic communication and is available to testify can lay foundation through direct oral evidence, reducing reliance on a certificate of compliance.",
    ],
    outcome: "Appeal dismissed. Conviction affirmed.",
    relatedCaseIds: ["okafor-v-frn"],
    riskFlags: [],
    documents: [
      {
        id: "adeyemi-judgment",
        caseId: "adeyemi-v-state",
        type: "Judgment",
        title: "Judgment of the Court of Appeal",
        pages: 17,
        filedDate: "8 June 2021",
        excerpt:
          "Where the device itself is before the court and its author testifies to its authenticity, the mischief which Section 84 was designed to guard against does not arise in the same way.",
        fullText: [
          "This appeal turns on a narrow but recurring evidential question: whether SMS threats read directly from the complainant's handset, with the handset tendered as Exhibit A, required a certificate of compliance before admission.",
          "Where the device itself is before the court and its author testifies to its authenticity, the mischief which Section 84 was designed to guard against does not arise in the same way.",
          "The complainant gave direct evidence identifying the messages, the sender's number, and the dates received, and was extensively cross-examined without any material contradiction.",
          "We find no merit in the submission that the trial court ought to have excluded this evidence for want of a certificate. The appeal is dismissed.",
        ],
      },
    ],
  },
  {
    id: "zenith-v-okeke",
    name: "Zenith Manufacturing Ltd v. Okeke",
    citation: "(2018) LPELR-45102(CA)",
    court: "Court of Appeal, Enugu Division",
    judge: "Hon. Justice C. N. Eze, JCA",
    dateDecided: "22 September 2018",
    practiceArea: ["Evidence", "Civil Procedure", "Employment"],
    parties: [
      { name: "Zenith Manufacturing Ltd", role: "Appellant", counsel: "In-house Counsel" },
      { name: "Ngozi Okeke", role: "Respondent", counsel: "P. Nwachukwu" },
    ],
    summary:
      "In a wrongful termination suit, the trial court rejected an affidavit filed by the Appellant's HR manager for want of proper jurat and commissioning, and the Court of Appeal was asked to determine whether the procedural defect was fatal.",
    keyPrinciples: [
      "An affidavit that is not properly sworn before a person authorised to administer oaths, or that lacks a valid jurat, is incompetent and liable to be struck out or discountenanced, regardless of the weight of its content.",
      "A procedural defect in an affidavit is not a mere irregularity where it goes to the root of the deponent's competence to depose; such a defect cannot be cured by oral submissions from the bar.",
      "Where an affidavit is rejected, the party is not thereby prevented from proving the same facts by admissible oral or documentary evidence, provided that evidence is otherwise properly before the court.",
    ],
    outcome:
      "Appeal dismissed. The trial court was right to discountenance the defective affidavit; however, since other admissible evidence supported the Respondent's case, the underlying judgment for wrongful termination was affirmed.",
    relatedCaseIds: ["okafor-v-frn"],
    riskFlags: [
      "This case supports rejection of a defective affidavit, but the underlying claim still succeeded on other evidence — do not cite this case alone for the proposition that a claim automatically fails when an affidavit is struck out.",
    ],
    documents: [
      {
        id: "zenith-judgment",
        caseId: "zenith-v-okeke",
        type: "Judgment",
        title: "Judgment of the Court of Appeal",
        pages: 19,
        filedDate: "22 September 2018",
        excerpt:
          "An affidavit that is not properly sworn before a person authorised to administer oaths is incompetent and liable to be struck out or discountenanced, regardless of the weight of its content.",
        fullText: [
          "The central complaint on this appeal is that the trial Judge wrongly discountenanced the counter-affidavit of the Appellant's Human Resources Manager, one Mr. Tunde Bakare, on the ground that it bore no valid jurat and was not shown to have been commissioned by a person authorised under the Oaths Act.",
          "An affidavit that is not properly sworn before a person authorised to administer oaths is incompetent and liable to be struck out or discountenanced, regardless of the weight of its content.",
          "A procedural defect of this nature goes to the very competence of the document and is not, as counsel for the Appellant urged upon us, a mere irregularity curable by submissions from the bar.",
          "Nonetheless, the trial court did not stop there. It proceeded to consider the oral testimony of the Respondent and documentary exhibits, including duly certified payroll records, and found on that evidence alone that the termination was procedurally unfair.",
          "We see no reason to disturb those findings. The appeal is dismissed.",
        ],
      },
      {
        id: "zenith-affidavit-rejected",
        caseId: "zenith-v-okeke",
        type: "Affidavit",
        title: "Counter-Affidavit of T. Bakare (Struck Out)",
        pages: 4,
        filedDate: "3 May 2017",
        excerpt:
          "That I, Tunde Bakare, depose as follows on behalf of Zenith Manufacturing Ltd...",
        fullText: [
          "That I, Tunde Bakare, depose as follows on behalf of Zenith Manufacturing Ltd, being the Human Resources Manager duly authorised to depose to this affidavit.",
          "[Jurat block incomplete — no commissioner's stamp or seal appears on the face of the document.]",
          "That the Respondent's termination followed due process under the company's staff handbook.",
        ],
      },
    ],
  },
  {
    id: "chukwu-v-fbn",
    name: "Chukwu v. First Merchant Bank Plc",
    citation: "(2020) LPELR-49877(CA)",
    court: "Court of Appeal, Port Harcourt Division",
    judge: "Hon. Justice I. M. Effiong, JCA",
    dateDecided: "11 February 2020",
    practiceArea: ["Contract", "Banking"],
    parties: [
      { name: "Emeka Chukwu", role: "Appellant", counsel: "O. Ibe" },
      { name: "First Merchant Bank Plc", role: "Respondent", counsel: "Legal Dept." },
    ],
    summary:
      "A dispute over remedies available for breach of a fixed-term facility agreement, addressing whether the claimant was entitled to specific performance or was limited to damages.",
    keyPrinciples: [
      "The primary remedy for breach of a purely commercial contract is damages; specific performance is an equitable remedy granted only where damages would be an inadequate remedy.",
      "A claimant seeking specific performance must show that the subject matter of the contract is unique or that damages cannot restore them to their original position.",
      "Damages for breach of contract are assessed on the ordinary rule in Hadley v. Baxendale as applied in Nigerian courts: losses naturally arising from the breach, or reasonably within the contemplation of both parties at the time of contracting.",
    ],
    outcome: "Appeal dismissed. Specific performance refused; damages awarded and quantum affirmed.",
    relatedCaseIds: [],
    riskFlags: [],
    documents: [
      {
        id: "chukwu-judgment",
        caseId: "chukwu-v-fbn",
        type: "Judgment",
        title: "Judgment of the Court of Appeal",
        pages: 15,
        filedDate: "11 February 2020",
        excerpt:
          "The primary remedy for breach of a purely commercial contract is damages; specific performance is an equitable remedy granted only where damages would be an inadequate remedy.",
        fullText: [
          "This appeal concerns the proper remedy for the Respondent bank's admitted failure to disburse the second tranche of a working-capital facility under a signed facility letter.",
          "The primary remedy for breach of a purely commercial contract is damages; specific performance is an equitable remedy granted only where damages would be an inadequate remedy.",
          "The Appellant did not demonstrate that the facility, being a fungible sum of money, was unique in a way that damages could not compensate.",
          "The trial court's award, calculated by reference to the additional interest the Appellant paid to a third-party lender as a direct consequence of the shortfall, was a proper application of the ordinary contractual measure of loss.",
        ],
      },
    ],
  },
  {
    id: "musa-v-state-bail",
    name: "Musa v. State",
    citation: "(2022) LPELR-56201(SC)",
    court: "Supreme Court of Nigeria",
    judge: "Hon. Justice M. D. Garba, JSC",
    dateDecided: "19 October 2022",
    practiceArea: ["Criminal Law", "Bail"],
    parties: [
      { name: "Aminu Musa", role: "Appellant", counsel: "Y. Suleiman, SAN" },
      { name: "State", role: "Respondent", counsel: "Office of the Attorney-General" },
    ],
    summary:
      "The Supreme Court restated the factors a court must weigh in granting or refusing bail pending trial for a capital offence, and the conditions that may properly be attached.",
    keyPrinciples: [
      "Bail pending trial is not automatic even for non-capital offences, and is refused as of right for capital offences save in exceptional circumstances such as ill health or undue delay in prosecution.",
      "Relevant factors include the nature and gravity of the charge, the likelihood of the accused interfering with witnesses or evidence, the risk of flight, and the accused's antecedents.",
      "Bail conditions must be reasonable and not so onerous as to amount to a de facto denial of bail; a court must have regard to the accused's means when fixing sureties and sums.",
    ],
    outcome: "Bail granted on stringent conditions given exceptional delay of over four years without trial.",
    relatedCaseIds: [],
    riskFlags: [],
    documents: [
      {
        id: "musa-judgment",
        caseId: "musa-v-state-bail",
        type: "Judgment",
        title: "Ruling on Bail Pending Trial",
        pages: 11,
        filedDate: "19 October 2022",
        excerpt:
          "Bail conditions must be reasonable and not so onerous as to amount to a de facto denial of bail; a court must have regard to the accused's means when fixing sureties and sums.",
        fullText: [
          "The Appellant has been in custody for four years and three months awaiting trial on a charge of culpable homicide punishable with death, without the prosecution closing its case.",
          "While bail is refused as of right for capital offences save in exceptional circumstances, undue delay in prosecution attributable to the State is a recognised exceptional circumstance.",
          "Bail conditions must be reasonable and not so onerous as to amount to a de facto denial of bail; a court must have regard to the accused's means when fixing sureties and sums.",
          "We grant bail in the sum of five million naira with two sureties in like sum, one of whom must be a civil servant of not less than Grade Level 12 resident within jurisdiction.",
        ],
      },
    ],
  },
  {
    id: "eze-v-nnpc-negligence",
    name: "Eze v. Nigerian National Petroleum Corporation",
    citation: "(2017) LPELR-42990(CA)",
    court: "Court of Appeal, Owerri Division",
    judge: "Hon. Justice F. O. Nnamani, JCA",
    dateDecided: "5 July 2017",
    practiceArea: ["Tort", "Negligence", "Environmental"],
    parties: [
      { name: "Ikechukwu Eze", role: "Plaintiff", counsel: "N. Obiora" },
      { name: "Nigerian National Petroleum Corporation", role: "Defendant", counsel: "Legal Dept." },
    ],
    summary:
      "A claim in negligence arising from an oil spill affecting farmland, restating the applicable test for a duty of care and breach under Nigerian tort law.",
    keyPrinciples: [
      "The test for negligence in Nigerian law follows the neighbour principle in Donoghue v. Stevenson: a duty of care arises where harm to the claimant was a reasonably foreseeable consequence of the defendant's conduct.",
      "To succeed, a claimant must prove duty of care, breach of that duty, and damage caused by the breach, on the balance of probabilities.",
      "In cases of oil spillage, the operator bears an evidential burden to show the spill resulted from sabotage rather than operational failure, where it seeks to rely on the statutory defence of third-party interference.",
    ],
    outcome: "Judgment for the Plaintiff; damages assessed by reference to the certified extent of affected farmland.",
    relatedCaseIds: [],
    riskFlags: [],
    documents: [
      {
        id: "eze-judgment",
        caseId: "eze-v-nnpc-negligence",
        type: "Judgment",
        title: "Judgment of the Court of Appeal",
        pages: 20,
        filedDate: "5 July 2017",
        excerpt:
          "The test for negligence in Nigerian law follows the neighbour principle in Donoghue v. Stevenson: a duty of care arises where harm to the claimant was a reasonably foreseeable consequence of the defendant's conduct.",
        fullText: [
          "This is a claim for damages arising from an oil spill from the Defendant's pipeline traversing the Plaintiff's farmland in Imo State.",
          "The test for negligence in Nigerian law follows the neighbour principle in Donoghue v. Stevenson: a duty of care arises where harm to the claimant was a reasonably foreseeable consequence of the defendant's conduct.",
          "To succeed, a claimant must prove duty of care, breach of that duty, and damage caused by the breach, on the balance of probabilities.",
          "The Defendant pleaded sabotage but led no evidence of any investigation report or third-party interference beyond a bare assertion, and so failed to discharge the evidential burden that rests on an operator advancing that defence.",
          "Judgment is entered for the Plaintiff in the sum assessed by the court-appointed valuer.",
        ],
      },
    ],
  },
];

export function getCaseById(id: string) {
  return cases.find((c) => c.id === id);
}

export function getDocumentById(id: string) {
  for (const c of cases) {
    const doc = c.documents.find((d) => d.id === id);
    if (doc) return { doc, legalCase: c };
  }
  return null;
}

export function searchCases(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return cases;
  return cases.filter((c) => {
    const haystack = [
      c.name,
      c.citation,
      c.court,
      c.judge,
      c.summary,
      ...c.practiceArea,
      ...c.keyPrinciples,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
