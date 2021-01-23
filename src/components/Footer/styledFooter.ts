import styled from 'styled-components';

export const Container = styled.div`
footer{
    padding:50px 60px;
    background:${props => props.theme.colors.primaryDark}; 
}
#spancing{
   margin: 2rem 0 2rem;
   
}
.footer-container{
  max-width: 1300px;
    margin: auto;
    padding: 0 20px;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-wrap: wrap-reverse;
}
.logo-footer{
width: 100px;
}
.social-media{
    margin: 20px 0; 
}
.social-media a{
    color: #08d5f0;
    margin-right: 25px;
    font-size: 22px;
    text-decoration: none;
    transition: .3s linear;
}
.social-media a:hover{
    color: #001a21;
}
.right-col h1{
    font-size: 26px;
    margin-top: 3.5rem;
}
.border{ 
width: 100px;
height: 4px;
background-color: #08d5f0;
}
.newletter-form{
    margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
}
.txtb{
    flex: 1;
    padding: 18px 40px;
    font-size: 16px;
    color: #293043;
    background: #ddd;
    border: none;
    font-weight: 700;
    outline: none;
    border-radius: 30px;
    min-width: 260px;
}
.btn-footer{
   
    padding: 18px 40px;
    font-size: 16px;
    color: #f1f1f1;
    background: #08d5f0;
    border: none;
    font-weight: 700;
    outline: none;
    border-radius: 30px;
    margin-left: 20px;
    cursor: pointer;
    transition:opacity .3s linear;
}
.btn-footer:hover{
    opacity: .7;
}
@media screen and (max-width:760px){
  .txtb{
    margin-bottom:2rem;
  }
    .footer-container{
        max-width: 600px;
    }
    .right-col{
        width: 100%;
        margin-bottom: 60px;
    }
    .left-col{
        width: 100%;
        text-align: center;
    }
}
`;
