import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';

const Test = () => {
    return (
        <TestStyle>
            {[...Array(3)].map((v,i) => (
                <div className="box" key={i}>{i}</div>
            ))}
        </TestStyle>
    )
}

export default Test

const TestStyle = styled.div`
.box{

}
`