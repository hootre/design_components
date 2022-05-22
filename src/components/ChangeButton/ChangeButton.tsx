import styled from "@emotion/styled";

export const Container = styled.div`
    position : relative;
    width : 0;
    height : 0;
    background : #37444b;
    border-radius : 25px;
    transition : 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before{
        content : '';
        position : absolute;
        width : 40px;
        height : 40px;
        background : #37444b;
        bottom : -14px;
        border-radius : 5px;
        transform : rotate(45deg);
        opacity : 0;
        transition : 0.5s;
    }
    .content{
        min-width : 400px;
        padding : 40px;
        color : #fff;
        opacity : 0;
        transition : 0.5s;
        transform : scale(0);
    }
    &.active{
        width : 400px;
        height : 400px;
        transition-delay : 0.5s;
        .toggleBtn{
            bottom : -90px;
            transform : rotate(135deg);
            background : #ff5a57;
        }
        .content{    
            opacity : 1;
            transition-delay : 0.5s;
            transform : scale(1);
        }
    }
    &.active:before{
        opacity : 1;
        transition-delay : 0.5s;
    }
        .toggleBtn{
            position : absolute;
            bottom : -20px;
            min-width : 60px;
            height : 60px;
            background : #0bcf9c;
            border-radius : 50%;
            cursor : pointer;
            transition : 0.5s;
            &:before{
                content : '+';
                font-size : 2.5em;
                color : #fff;
            }
        }
    
}`
