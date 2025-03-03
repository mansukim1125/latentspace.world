import {IProfile} from "@/interface/profile/profile.interface";

export const FooterSection = (param: {
  profile: IProfile;
}) => {
  const { profile } = param;

  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2025 latentspace.world
          </div>
          <div className="flex space-x-6">
            {Object.entries(profile.socialLink).map(([label, link]) => {
              return (
                <a key={label} href={link} className="text-gray-500 hover:text-gray-300">{label}</a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
