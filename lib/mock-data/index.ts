import type {
  AIAgent,
  AuditTrailEvent,
  BEPDiscipline,
  ComplianceItem,
  Contract,
  ContractorProgrammeTask,
  DesignTeamMember,
  Drawing,
  EscrowMilestone,
  FreelancerWorkPackage,
  Invoice,
  MunicipalStatus,
  Notification,
  Payment,
  Professional,
  ProgressClaim,
  Project,
  ProjectStage,
  Proposal,
  RFI,
  SiteInstruction,
  Snag,
  Tender,
  User,
} from "@/lib/types";

export const roles = [
  "client",
  "bep",
  "contractor",
  "freelancer",
  "admin",
] as const;
export const users: User[] = [
  {
    id: "u1",
    name: "Nomsa Dlamini",
    role: "client",
    organisation: "Dlamini Family Trust",
    email: "nomsa@client.test",
  },
  {
    id: "u2",
    name: "Ari Jacobs",
    role: "bep",
    organisation: "Studio North Architects",
    verified: true,
    email: "ari@studio.test",
  },
  {
    id: "u3",
    name: "Mandla Khumalo",
    role: "contractor",
    organisation: "Khumalo Build Co",
    verified: true,
    email: "mandla@build.test",
  },
  {
    id: "u4",
    name: "Leila Petersen",
    role: "freelancer",
    organisation: "Independent BIM detailer",
    verified: true,
    email: "leila@bim.test",
  },
  {
    id: "u5",
    name: "Architex Trust Desk",
    role: "admin",
    organisation: "Architex",
    email: "trust@architex.test",
  },
];
export const bepDisciplines: BEPDiscipline[] = [
  "Architect",
  "Architectural technologist",
  "Structural engineer",
  "Civil engineer",
  "Wet services engineer",
  "Fire engineer",
  "Mechanical engineer",
  "Electrical engineer",
  "Quantity surveyor",
  "Landscape architect",
  "Town planner",
  "Environmental consultant",
  "Heritage consultant",
  "Geotechnical engineer",
  "Traffic engineer",
  "Acoustic consultant",
  "Facade consultant",
  "Interior designer",
  "Health and safety consultant",
  "Project manager",
  "Land surveyor",
  "Other specialist consultants",
].map((name) => ({
  name,
  category: name.includes("engineer")
    ? "Engineering"
    : name.includes("consultant")
      ? "Specialist consultant"
      : "Design and advisory",
  verificationRequired: true,
}));
export const projects: Project[] = [
  {
    id: "p1",
    name: "Oranjezicht Residence Alteration",
    client: "Dlamini Family Trust",
    type: "Residential alteration",
    location: "Cape Town",
    stage: "Municipal submission",
    readinessScore: 78,
    budget: 2650000,
    nextAction: "Approve architect appointment recommendation",
    diagnostic:
      "Zoning route is clear; structural opening and heritage overlay require specialist inputs before submission.",
    status: "active",
  },
  {
    id: "p2",
    name: "Midrand Light Industrial Fit-out",
    client: "Mokoena Logistics",
    type: "Commercial fit-out",
    location: "Johannesburg",
    stage: "Tender",
    readinessScore: 86,
    budget: 5400000,
    nextAction: "Issue addendum 02 to tenderers",
    diagnostic:
      "Fire rational design and wet services coordination are the current critical path.",
    status: "review",
  },
];
export const projectStages: ProjectStage[] = [
  {
    id: "s1",
    title: "Brief",
    description: "Client intake, feasibility, constraints and advisory route",
    owner: "client",
    status: "complete",
  },
  {
    id: "s2",
    title: "Verified appointment",
    description: "Shortlist and appoint accountable BEPs",
    owner: "shared",
    status: "active",
  },
  {
    id: "s3",
    title: "Design coordination",
    description: "Drawing register, dependencies and consultant outputs",
    owner: "bep",
    status: "active",
  },
  {
    id: "s4",
    title: "Municipal approval",
    description: "Submission pack, authority comments and compliance evidence",
    owner: "bep",
    status: "pending",
  },
  {
    id: "s5",
    title: "Tender",
    description: "Issue tender packs, queries, returns and recommendation",
    owner: "bep",
    status: "pending",
  },
  {
    id: "s6",
    title: "Construction",
    description:
      "Programme, RFIs, instructions, claims, snagging and close-out",
    owner: "contractor",
    status: "pending",
  },
];
export const professionals: Professional[] = [
  {
    id: "pr1",
    name: "Studio North Architects",
    discipline: "Architect",
    verified: true,
    capacity: "2 appointment slots",
    rating: 4.8,
  },
  {
    id: "pr2",
    name: "LineLoad Engineers",
    discipline: "Structural engineer",
    verified: true,
    capacity: "Available in 7 days",
    rating: 4.7,
  },
  {
    id: "pr3",
    name: "CivicFlow Planning",
    discipline: "Town planner",
    verified: false,
    capacity: "Verification pending",
    rating: 4.5,
  },
];
export const proposals: Proposal[] = [
  {
    id: "prop1",
    professional: "Studio North Architects",
    discipline: "Architect",
    fee: 186000,
    duration: "12 weeks to submission",
    scope: "Concept, council pack, consultant coordination",
    riskNotes: "Heritage overlay managed with early pre-consultation",
    verified: true,
  },
  {
    id: "prop2",
    professional: "Urban Form Atelier",
    discipline: "Architect",
    fee: 164000,
    duration: "14 weeks to submission",
    scope: "Design pack and municipal drawings",
    riskNotes: "Requires external town planner appointment",
    verified: true,
  },
];
export const contracts: Contract[] = [
  {
    id: "c1",
    project: projects[0].name,
    party: "Studio North Architects",
    value: 186000,
    status: "active",
    nextMilestone: "Municipal submission pack",
  },
  {
    id: "c2",
    project: projects[1].name,
    party: "Khumalo Build Co",
    value: 4120000,
    status: "approved",
    nextMilestone: "Site establishment",
  },
];
export const payments: Payment[] = [
  {
    id: "pay1",
    project: projects[0].name,
    milestone: "Appointment retainer",
    amount: 46500,
    due: "2026-05-20",
    status: "paid",
  },
  {
    id: "pay2",
    project: projects[0].name,
    milestone: "Submission pack certified",
    amount: 74400,
    due: "2026-06-18",
    status: "pending",
  },
];
export const escrowMilestones: EscrowMilestone[] = [
  {
    id: "e1",
    title: "Site establishment",
    amount: 320000,
    releaseGate: "Architect confirms insurances, programme and H&S file",
    certificationStatus: "Awaiting architect certification",
    retention: "5% retained",
    auditNote: "AI prepared release checklist; human approval required",
    status: "review",
  },
  {
    id: "e2",
    title: "Roof structure complete",
    amount: 680000,
    releaseGate: "QS valuation + structural engineer site note",
    certificationStatus: "Not submitted",
    retention: "5% retained",
    auditNote: "No automated release permitted",
    status: "pending",
  },
];
export const invoices: Invoice[] = [
  {
    id: "i1",
    project: projects[1].name,
    invoiceNo: "KBC-0041",
    amount: 320000,
    linkedClaim: "PC-01",
    certification: "Architect certified",
    escrowStatus: "Release requested",
    retention: "R16,000 retained",
    status: "review",
  },
];
export const designTeamMembers: DesignTeamMember[] = [
  "Architect",
  "Structural engineer",
  "Fire engineer",
  "Wet services engineer",
  "Mechanical engineer",
  "Electrical engineer",
  "QS",
  "Landscape architect",
  "Town planner",
  "Other specialists",
].map((role, index) => ({
  role,
  responsibility:
    index === 0
      ? "Principal consultant and design integration"
      : `Coordinate ${role.toLowerCase()} inputs into the submission and construction information`,
  deliverable: index < 3 ? "Issued for coordination" : "Awaiting dependency",
  status: index < 2 ? "active" : index === 2 ? "review" : "pending",
  dependency: index === 0 ? "Client brief approval" : "Architect base plans",
  nextAction:
    index < 3
      ? "Resolve coordination comment"
      : "Confirm appointment and programme",
}));
export const drawingRegister: Drawing[] = [
  {
    id: "d1",
    number: "A-100",
    title: "Site plan and zoning schedule",
    revision: "P03",
    discipline: "Architect",
    status: "review",
    issuedFor: "Municipal pre-check",
    dependency: "Town planning note",
  },
  {
    id: "d2",
    number: "S-210",
    title: "Structural opening details",
    revision: "P01",
    discipline: "Structural engineer",
    status: "active",
    issuedFor: "Coordination",
    dependency: "Architect demolition plan",
  },
];
export const complianceItems: ComplianceItem[] = [
  {
    id: "co1",
    requirement: "SANS 10400 fire escape travel distance",
    authority: "Municipality",
    owner: "Fire engineer",
    due: "2026-05-28",
    status: "review",
    aiCheck: "Draft checklist complete; professional sign-off required",
  },
  {
    id: "co2",
    requirement: "Heritage overlay motivation",
    authority: "Heritage authority",
    owner: "Architect",
    due: "2026-06-05",
    status: "pending",
    aiCheck: "Missing existing streetscape photos",
  },
];
export const municipalStatuses: MunicipalStatus[] = [
  {
    id: "m1",
    step: "Pre-consultation booked",
    authority: "City planning desk",
    date: "2026-05-15",
    status: "active",
    note: "AI drafted agenda; architect to approve",
  },
  {
    id: "m2",
    step: "Submission pack upload",
    authority: "Building control",
    date: "2026-06-21",
    status: "pending",
    note: "Dependent on fire and structural sheets",
  },
];
export const tenders: Tender[] = [
  {
    id: "t1",
    package: "Main contractor tender",
    contractor: "Khumalo Build Co",
    packStatus: "Complete",
    addenda: 2,
    queries: 5,
    returnValue: 4120000,
    recommendation: "Preferred: strongest programme and exclusions resolved",
    status: "review",
  },
  {
    id: "t2",
    package: "Main contractor tender",
    contractor: "Northline Construction",
    packStatus: "Addendum pending",
    addenda: 2,
    queries: 3,
    returnValue: 3975000,
    recommendation: "Clarify provisional sums before appointment",
    status: "pending",
  },
];
export const contractorProgrammeTasks: ContractorProgrammeTask[] = [
  {
    id: "g1",
    task: "Site establishment",
    workStage: "Preliminaries",
    start: "2026-05-18",
    end: "2026-05-31",
    progress: 60,
    owner: "Contractor",
    dependency: "Signed building contract",
  },
  {
    id: "g2",
    task: "Demolition and structural propping",
    workStage: "Structure",
    start: "2026-06-01",
    end: "2026-06-21",
    progress: 15,
    owner: "Contractor",
    dependency: "Engineer method statement",
  },
  {
    id: "g3",
    task: "Roof structure",
    workStage: "Envelope",
    start: "2026-06-22",
    end: "2026-07-19",
    progress: 0,
    owner: "Contractor",
    dependency: "Steel shop drawings approved",
  },
];
export const rfis: RFI[] = [
  {
    id: "RFI-018",
    subject: "Confirm lintel bearing at enlarged opening",
    raisedBy: "Khumalo Build Co",
    assignedTo: "Structural engineer",
    due: "2026-05-14",
    impact: "Potential 3 day delay",
    status: "active",
  },
];
export const siteInstructions: SiteInstruction[] = [
  {
    id: "SI-007",
    instruction: "Revise bathroom wall set-out to suit wet services riser",
    issuedBy: "Architect",
    costImpact: "To be priced",
    programmeImpact: "No critical delay if answered this week",
    status: "review",
  },
];
export const progressClaims: ProgressClaim[] = [
  {
    id: "PC-01",
    workStage: "Site establishment",
    evidence: "Insurances, H&S file, site photos uploaded",
    claimAmount: 320000,
    qsCertification: "QS valuation complete",
    clientApproval: "Awaiting client approval",
    invoice: "KBC-0041",
    escrowRelease: "Release request prepared; human approval gate",
    status: "review",
  },
];
export const snags: Snag[] = [
  {
    id: "SN-12",
    area: "Kitchen",
    item: "Re-align cabinet shadow gap",
    owner: "Joinery subcontractor",
    status: "active",
    due: "2026-08-10",
  },
];
export const freelancers: User[] = users.filter((u) => u.role === "freelancer");
export const freelancerWorkPackages: FreelancerWorkPackage[] = [
  {
    id: "fw1",
    title: "BIM model clean-up for municipal sheets",
    postedByBep: "Studio North Architects",
    discipline: "Architectural technologist",
    deliverable: "Coordinated Revit views and sheet exports",
    fee: 18500,
    due: "2026-05-27",
    status: "active",
    skills: ["Revit", "Municipal drawings", "Sheet coordination"],
  },
  {
    id: "fw2",
    title: "Wet services mark-up conversion",
    postedByBep: "FlowLine Engineers",
    discipline: "Wet services engineer",
    deliverable: "CAD mark-ups converted into coordinated DWG layer set",
    fee: 9200,
    due: "2026-05-21",
    status: "pending",
    skills: ["AutoCAD", "SANS 10252", "Coordination"],
  },
];
export const aiAgents: AIAgent[] = [
  "Briefing Agent",
  "Matching Agent",
  "Proposal Agent",
  "Design Coordination Agent",
  "Compliance Agent",
  "Municipal Agent",
  "Tender Agent",
  "Construction Agent",
  "Payment / Workflow Agent",
].map((name) => ({
  id: name.toLowerCase().replaceAll(" ", "-"),
  name,
  does: `${name} drafts, summarises, routes and checks completeness inside the relevant workflow.`,
  inputs: ["Project data", "Role permissions", "Uploaded evidence"],
  outputs: ["Draft checklist", "Recommended next action", "Audit log entry"],
  approvalGate: name.includes("Payment")
    ? "Client/QS/architect approval before release"
    : "Accountable human reviews before external issue",
  status: "draft",
}));
export const notifications: Notification[] = [
  {
    id: "n1",
    title: "Human approval required",
    body: "AI prepared an escrow release checklist for PC-01; payment cannot release automatically.",
    role: "client",
    status: "review",
  },
  {
    id: "n2",
    title: "Verification gate",
    body: "CivicFlow Planning cannot access marketplace jobs until admin verification is complete.",
    role: "admin",
    status: "pending",
  },
];
export const auditTrailEvents: AuditTrailEvent[] = [
  {
    id: "a1",
    actor: "Compliance Agent",
    action: "Drafted",
    object: "SANS fire checklist",
    time: "2026-05-11 08:15 UTC",
    note: "Logged as draft; fire engineer review required",
  },
  {
    id: "a2",
    actor: "QS",
    action: "Certified",
    object: "PC-01 valuation",
    time: "2026-05-10 14:22 UTC",
    note: "Certification recorded before client approval and escrow release",
  },
];
