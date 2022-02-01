import Image from "next/image";
import {
    BadgeCheckIcon, CollectionIcon,
    HomeIcon, LightningBoltIcon,
    SearchIcon, UserIcon
} from "@heroicons/react/solid";
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 
                            justify-between items-center
                            h-auto'>
            <Image
                className='object-contain'
                src="https://links.papareact.com/ua6"
                alt="object-image"
                width={150}
                height={100} />
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
        </header>
    );
}

export default Header