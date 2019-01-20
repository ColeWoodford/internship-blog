import styled from 'styled-components';

export const BlogWrapper = styled.div`
  text-align: center
  margin: 5px;
`;

export const Title = styled.button`
  height: 35px;
  width: 95%
  border-radius: 4px;
  border: 1px solid grey;
  box-shadow: none;

  &:hover {
		background: #4ddbff;
	}

	&:focus {
		outline: none;
	}
`;

export const Content = styled.div`
  text-align: left
  margin: auto
  width: 95%
  border-radius: 4px;
  border: 1px solid grey;
`;