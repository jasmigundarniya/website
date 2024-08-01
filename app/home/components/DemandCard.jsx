import React from 'react'
import Card from './Card'
const DemandCard = () => {

    const data = [
        { name: "OCC SA, ZA", price: "7000.0 MT" },
        { name: "MIX  WASTE, USA GB", price: "1000.0 MT" },
        { name: "POLY CUPSTOCK Indonesia, Turkey,  Taiwan, USA", price: "1000.0 MT" },
        { name: "OCC 11, USA", price: "1000.0 MT" },
        { name: "CUP STock USA", price: "990.0 MT" },
    ]
    return (
        <Card title={"Top 5 Demands"}>
            {
                data.map((val) => {
                    return <div className='flex justify-between items-center my-3'>
                        <div className="font-source-sans-pro text-[14px] font-normal leading-[17.6px] text-center">
                            {val.name}
                        </div>
                        <div className="font-source-sans-pro text-[16px] font-bold leading-[20.11px] text-right">
                            {val.price}
                        </div>

                    </div>
                })
            }
        </Card>
    )
}

export default DemandCard