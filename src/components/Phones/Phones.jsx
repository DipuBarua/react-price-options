import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio, FallingLines, Grid } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //         .then(res => res.json())
    //         .then(data => setPhones(data.data))
    // }, [])

    // But now we use axios.get() instead of useEffect().
    axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(data=>console.log(data.data.data))
        .then(data => {
            const phoneData = data.data.data;
            const phoneFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
                // if we use multiline in map then arrow function will not return automatically.
            });
            setPhones(phoneFakeData);
            setLoading(false);
        })



    return (
        <div>
            {loading && <div className="flex gap-10">
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color='green'
                    ariaLabel='three-dots-loading'
                    wrapperStyle
                    wrapperClass
                />

                <Grid
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />

                <FallingLines
                    color="#4fa94d"
                    width="100"
                    visible={true}
                    ariaLabel='falling-lines-loading'
                />
            </div>
            }

            <h1 className=" text-4xl">phone: {phones.length}</h1>

            <BarChart width={600} height={300} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;