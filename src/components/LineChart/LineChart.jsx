import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const productsData = [
        { "id": 1, "product": "Electronics", "price": 500, "preWeekPrice": 480 },
        { "id": 2, "product": "Clothing", "price": 50, "preWeekPrice": 55 },
        { "id": 3, "product": "Furniture", "price": 300, "preWeekPrice": 310 },
        { "id": 4, "product": "Appliances", "price": 400, "preWeekPrice": 390 },
        { "id": 5, "product": "Books", "price": 20, "preWeekPrice": 22 },
        { "id": 6, "product": "Toys", "price": 30, "preWeekPrice": 28 },
        { "id": 7, "product": "Jewelry", "price": 100, "preWeekPrice": 98 },
        { "id": 8, "product": "Sporting Goods", "price": 70, "preWeekPrice": 68 },
        { "id": 9, "product": "Home Decor", "price": 80, "preWeekPrice": 82 },
        { "id": 10, "product": "Beauty Products", "price": 25, "preWeekPrice": 27 }

    ]

    return (
        <div>
            <LChart width={1000} height={400} data={productsData}>
                <XAxis dataKey={'product'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="price" stroke='red'></Line>
                <Line dataKey="preWeekPrice" stroke='blue'></Line>
            </LChart>
            <h1>Chart: current price(red line) VS previous week price(blue line)</h1>
        </div>
    );
};

export default LineChart;