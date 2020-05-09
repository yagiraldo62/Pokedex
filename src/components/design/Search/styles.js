import styled from 'styled-components';

export const SearchCont = styled.div`
	width: 100%;
	display: flex;

	.MuiFormLabel-root,input{
		font-size:1.5em !important;
	}

	*:not(.MuiInputAdornment-root ){
		color:#2E4053;
	}

	div {
		width: 60%;
		display: inline-flex;
		justify-content: flex-end;
		margin-bottom: 20px;
		margin-top:1em;

		.Mui-focused{
			color : #EC7063 !important;
			svg{
				fill : #EC7063 !important;
			}
		}

		

		@media (max-width : 600px){
			width :80%;
		}

		@media (max-width : 440px){
			width :90%;
		}

		.MuiInputBase-root {
			width: 100%;
		}

		.MuiInputAdornment-root{
			margin-bottom:-1em;
		}
		
	}

	
`;
