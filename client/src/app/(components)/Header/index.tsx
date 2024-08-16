/** @format */

type HeaderProps = {
  name: string;
};
const Header = ({ name }: HeaderProps) => {
  return <h1 className='text-2xl text-gray-700 font-semibold'>{name}</h1>;
};

export default Header;
