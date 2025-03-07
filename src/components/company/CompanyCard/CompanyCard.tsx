import {ICompany} from "@/interface/company/company.interface";
import {Building2, Shapes} from "lucide-react";

export function CompanyCard(param: { company: ICompany | null }) {
  const { company } = param;

  return (
    <div className="pb-3">
      <div className="pb-4 flex items-center">
        {(() => {
          if (company?.period && company?.position && company?.team) {
            return <Building2 className="inline mr-3 stroke-purple-500"/>
          } else {
            return <Shapes className="inline mr-3 stroke-purple-500"/>
          }
        })()}
        <span className="text-2xl font-bold">{company?.name || 'Personal'}</span>
      </div>
      {(company?.period && company?.position && company?.team) && (
        <p className="pb-4 text-gray-400">
          <span className="mr-5">
            {company?.period || ''}
          </span>
          <span className="mr-5">
            {company?.position || ''}
          </span>
          <span>{company?.team || ''}</span>
        </p>
      )}
      <p className="text-gray-400">
        <span>{company?.description || '개인 프로젝트'}</span>
      </p>
    </div>
  )
}
