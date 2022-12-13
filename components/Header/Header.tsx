import Link from 'next/link';
import Image from 'next/image';
// Components
import SearchInput from '../SearchInput/SearchInput';
// Images
import RMDBLogo from '../../public/rmdb-logo.svg';
import RMDBLogoSmall from '../../public/rmdb-logo-small.svg';

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => (
  <div className="sticky flex justify-center top-0 z-40  h-24 bg-zinc-900">
    {setQuery ? (
      <div className="relative flex  justify-center items-center">
        <SearchInput setQuery={setQuery} />
      </div>
    ) : null}
  </div>
);

export default Header;
