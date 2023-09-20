import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": 9.99,
            "description": "Ideal for individuals with basic needs",
            "features": [
                "Access to core features",
                "Limited support",
                "No advanced add-ons"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 19.99,
            "description": "Great for small businesses and teams",
            "features": [
                "Access to core features",
                "Email support",
                "Basic add-ons included"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 39.99,
            "description": "Perfect for larger organizations",
            "features": [
                "Access to all features",
                "24/7 premium support",
                "Advanced add-ons included"
            ]
        },
        {
            "id": 4,
            "name": "Student Discount",
            "price": 5.99,
            "description": "Exclusive pricing for students",
            "features": [
                "Access to core features",
                "Valid student ID required",
                "Limited support"
            ]
        },
        {
            "id": 5,
            "name": "Enterprise",
            "price": 86.64,
            "description": "Customized solutions for enterprise clients",
            "features": [
                "Tailored to your organization's needs",
                "Dedicated account manager",
                "Full suite of advanced add-ons"
            ]
        }
    ]

    return (
        <div>
            <h1 className=" text-center text-4xl bg-yellow-500">Best price in the market</h1>
            <div className=" grid md:grid-cols-3 gap-10">
                {

                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;