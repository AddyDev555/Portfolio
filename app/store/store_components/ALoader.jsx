'use client'; 
import Image from 'next/image';

const ALoader = () => {
    return (
        <div className="flex items-center justify-center z-50">
            <Image
                src={"/loader.gif"}
                width={60}
                height={60}
                alt="loading..."
                priority
            />
        </div>
    );
};

export default ALoader;
