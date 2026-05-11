export type UserRole = "client" | "bep" | "contractor" | "freelancer" | "admin";
export type Status =
  | "draft"
  | "pending"
  | "active"
  | "review"
  | "approved"
  | "rejected"
  | "blocked"
  | "complete"
  | "paid"
  | "certified";
export type User = {
  id: string;
  name: string;
  role: UserRole;
  organisation: string;
  verified?: boolean;
  email: string;
};
export type Project = {
  id: string;
  name: string;
  client: string;
  type: string;
  location: string;
  stage: string;
  readinessScore: number;
  budget: number;
  nextAction: string;
  diagnostic: string;
  status: Status;
};
export type ProjectStage = {
  id: string;
  title: string;
  description: string;
  owner: UserRole | "shared";
  status: Status;
};
export type BEPDiscipline = {
  name: string;
  category: string;
  verificationRequired: boolean;
};
export type Professional = {
  id: string;
  name: string;
  discipline: string;
  verified: boolean;
  capacity: string;
  rating: number;
};
export type Proposal = {
  id: string;
  professional: string;
  discipline: string;
  fee: number;
  duration: string;
  scope: string;
  riskNotes: string;
  verified: boolean;
};
export type Contract = {
  id: string;
  project: string;
  party: string;
  value: number;
  status: Status;
  nextMilestone: string;
};
export type Payment = {
  id: string;
  project: string;
  milestone: string;
  amount: number;
  due: string;
  status: Status;
};
export type Invoice = {
  id: string;
  project: string;
  invoiceNo: string;
  amount: number;
  linkedClaim?: string;
  certification: string;
  escrowStatus: string;
  retention: string;
  status: Status;
};
export type EscrowMilestone = {
  id: string;
  title: string;
  amount: number;
  releaseGate: string;
  certificationStatus: string;
  retention: string;
  auditNote: string;
  status: Status;
};
export type Drawing = {
  id: string;
  number: string;
  title: string;
  revision: string;
  discipline: string;
  status: Status;
  issuedFor: string;
  dependency: string;
};
export type ComplianceItem = {
  id: string;
  requirement: string;
  authority: string;
  owner: string;
  due: string;
  status: Status;
  aiCheck: string;
};
export type MunicipalStatus = {
  id: string;
  step: string;
  authority: string;
  date: string;
  status: Status;
  note: string;
};
export type Tender = {
  id: string;
  package: string;
  contractor: string;
  packStatus: string;
  addenda: number;
  queries: number;
  returnValue: number;
  recommendation: string;
  status: Status;
};
export type ContractorProgrammeTask = {
  id: string;
  task: string;
  workStage: string;
  start: string;
  end: string;
  progress: number;
  owner: string;
  dependency: string;
};
export type RFI = {
  id: string;
  subject: string;
  raisedBy: string;
  assignedTo: string;
  due: string;
  impact: string;
  status: Status;
};
export type SiteInstruction = {
  id: string;
  instruction: string;
  issuedBy: string;
  costImpact: string;
  programmeImpact: string;
  status: Status;
};
export type ProgressClaim = {
  id: string;
  workStage: string;
  evidence: string;
  claimAmount: number;
  qsCertification: string;
  clientApproval: string;
  invoice: string;
  escrowRelease: string;
  status: Status;
};
export type FreelancerWorkPackage = {
  id: string;
  title: string;
  postedByBep: string;
  discipline: string;
  deliverable: string;
  fee: number;
  due: string;
  status: Status;
  skills: string[];
};
export type DesignTeamMember = {
  role: string;
  responsibility: string;
  deliverable: string;
  status: Status;
  dependency: string;
  nextAction: string;
};
export type AIAgent = {
  id: string;
  name: string;
  does: string;
  inputs: string[];
  outputs: string[];
  approvalGate: string;
  status: "draft" | "reviewed" | "approved" | "rejected";
};
export type AuditTrailEvent = {
  id: string;
  actor: string;
  action: string;
  object: string;
  time: string;
  note: string;
};
export type Notification = {
  id: string;
  title: string;
  body: string;
  role: UserRole | "all";
  status: Status;
};
export type Snag = {
  id: string;
  area: string;
  item: string;
  owner: string;
  status: Status;
  due: string;
};
