import { IProfile } from '@/interface/profile/profile.interface';

export const FooterSection = (param: { profile: IProfile }) => {
  const { profile } = param;

  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">© 2025 joonseok kim</div>
          <div className="flex space-x-6">
            {Object.entries(profile.social).map(([label, link]) => {
              if (link) {
                return (
                  <a
                    key={label}
                    href={label === 'email' ? `mailto:${link}` : link}
                    className="text-gray-500 hover:text-gray-300 capitalize"
                  >
                    {label}
                  </a>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
