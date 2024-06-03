import React from 'react'
import { Card } from '@tremor/react';

function Info() {
  return (
    <div>
        <div>
            <Card className='md:mx-2 mx-auto bg-tremor-background max-w-[350px] h-[250px]'>
                <div>
                    <div>
                        <h1>Hello Champ 👋</h1> 
                        <h2>We have noted that your mood is sad</h2>
                        <p>But do not worry because we are here to make fell better</p>
                    </div>

                </div>
            </Card>
        </div>
    </div>
  )
}

export default Info