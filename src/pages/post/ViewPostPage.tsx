import styled from "styled-components";
import ViewPost from "../../components/post/ViewPost";
import HashTag from "../../components/post/HashTag";
import PostCommentsContainer from "../../components/post/PostCommentsContainer";

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  min-width: 390px;
  gap: 20px;
  max-width: 1024px;
`;

const ViewPostPage = () => {
  return (
    <ViewContainer>
      <ViewPost />
      <PostCommentsContainer />
      <HashTag />
    </ViewContainer>
  );
};

export default ViewPostPage;
