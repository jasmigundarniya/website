import React from 'react';
import Card from './Card';
import Paper from '@/public/assets/svgs/Paper';
import Tree from '@/public/assets/svgs/Tree';
import Co2Icon from '@/public/assets/svgs/Co2Icon';
const FirstCard = () => {
    return (
        <Card className="flex-grow-0 flex-shrink-0">
            <div className='flex  justify-between p-5 w-auto'>
                <div className='flex'>
                    <Paper />
                    <div className='grid ms-2'>
                        <h1 class="text-[14px] font-bold">Paper Recycled</h1>
                        <div class="text-[14px] text-[#30375080]">
                            10244.0MT
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <Tree />
                    <div className='grid ms-2'>
                        <h1 className="text-[14px] font-bold">Trees Saved</h1>
                        <div className="text-[14px] text-[#30375080]">
                            204
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <Co2Icon />
                    <div className='grid ms-2'>
                        <h1 class="text-[14px] font-bold">Co2 Saved</h1>
                        <div class="text-[14px] text-[#30375080]">
                            4.46 TONS
                        </div>
                    </div>
                </div>

            </div>
        </Card>
    );
};

export default FirstCard;
