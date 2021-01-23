import styled from 'styled-components';

export const Container = styled.div`

main{
  margin:0;
  max-width:100%;
  height:100%;
  padding-top: 4rem;
  background:  linear-gradient(to right top, #c81912, #240b36);
   
}
main form fieldset{
     border: 0;
     }
main form fieldset label{
 display:flex;
 align-items:center;
 justify-content:center;
 margin-top:1rem;
}
input{
  margin-bottom:2rem;
  max-width:30rem;
}


@media screen and ( max-width: 768px){
 
main{
  
    width: 100%;
    max-width: 74rem;
    border-radius: 0.2rem;
    padding-top: 6.4rem;
    overflow: hidden;
}

 main form{
margin-bottom:4rem;
}
input{
  width: 100%; 
  margin-bottom:2rem;
  max-width:70%; 
}
fieldset{
    padding:0 2.4rem;
    margin-bottom:2rem;
} 


}
`;
export const Beefs = styled.div`
	max-width: 1200px;
	margin: 0 ;
display:flex;
align-items:center;
text-align:center;

.beefs-outer{
   padding:2rem;

 }
@media (min-width: 1100px){
    .beefs-outer {
   margin-left:25rem;
 }
  
  }


 section{
  column-count:2;
  column-gap:0.8rem;
  padding:0;
 
  
}

 section label{
  display:flex;
  align-items:center;
  justify-content:center; 
  margin:0 auto;
 }

section span{
  margin-bottom:1rem;
  margin-left:1.5rem;
  text-align:center;
}


`;
export const Drinks = styled.div`
 section {
  display:flex;
  align-items:center;
  justify-content:center; 
  padding:2rem;
  margin-bottom:2rem;
 }
`;

export const Complements = styled.div`
		max-width: 1200px;
    margin:0;
display:flex;
align-items:center;
text-align:center;

.complements-outer{
   padding:2rem;
 }
@media (min-width: 1100px){
    .complements-outer{
   margin-left:25rem;
  
 }
}
 

 section{
  column-count:2;
  column-gap:0.8rem;
  padding:0;

 
 
}

section label span{
  margin-bottom:1rem;
  margin-left:1.5rem;
  text-align:center;
 
}

`;
export const Result = styled.div`
  margin-bottom: 20px;
`;

export const ResultContainer = styled.div`
  margin-top: 50px;
`;

export const ResultContent = styled.div`
  margin-top: 10px;
  background: ${props => props.theme.colors.primaryDark};
  border-radius: 5px;
  padding: 10px;
  ul {
    list-style: none;
  }
  ul li {
    font-size: 14px;
    font-weight: bold;
    font-family: "Montserrat Bold", sans-serif;
    line-height: 30px;
  }
  ul li strong {
    color: #ff7373;
  }

    `;
