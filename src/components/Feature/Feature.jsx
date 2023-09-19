import { BiSolidCheckShield } from 'react-icons/bi';
const Feature = ({ feature }) => {
    return (
        <div>
            <ol className=" text-white text-sm">
                <li>
                    <p className='flex items-center gap-1 ml-5 mb-1'>
                        <BiSolidCheckShield className=' text-green-400'></BiSolidCheckShield>
                        {feature}
                    </p>
                </li>
            </ol>
        </div >
    );
};

export default Feature;