import Link from 'next/link';

const NavLink = ({ href, title, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const yOffset = -80; // 헤더 높이 조정
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} scroll={false}>
      <div onClick={handleClick} className="block py-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer">
        {title}
      </div>
    </Link>
  );
};

export default NavLink;
