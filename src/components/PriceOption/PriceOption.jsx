import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, description, features } = option;
    return (
        <div className=" bg-blue-600 rounded-xl p-5 flex flex-col">
            <h2 className=" text-center mb-4 text-white">
                <span className=" text-7xl font-bold">{price}</span>
                <span className=" text-xl ">/mon</span>
                <h1 className=" text-3xl font-bold mt-5">{name}</h1>
            </h2>
            <p className=" text-white ml-5 mb-2">{description}</p>

            <div className=" flex-grow">
                {
                    features.map(feature => <Feature feature={feature}></Feature>)
                }
            </div>
            <button className=" bg-green-500 hover:bg-green-900 p-2 rounded-lg w-full mt-12 text-xl font-bold text-white">Buy Now</button>

        </div>
    );
};

export default PriceOption;