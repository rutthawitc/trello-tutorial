import { OrgControl } from './_components/org-control';

const OraganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};
export default OraganizationIdLayout;
