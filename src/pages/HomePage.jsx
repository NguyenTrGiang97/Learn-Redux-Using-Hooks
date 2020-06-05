import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import casual from 'casual-browserify';
import { addNewHobby, setActiceHobby } from '../actions/hobby';
import HobbyList from '../components';

HomePage.propTypes = {
    
};

function HomePage(props) {
    // connect vào redux store lấy toàn bộ state của hobbyReducer 
    const hobbyList = useSelector(state => state.hobbyReducer.list);
    const activeId = useSelector(state => state.hobbyReducer.activeId);

    const dispatch = useDispatch();
    //console.log("hobby list: ", hobbyList);

    const handleAddHobbyClick = () => {
        // random a hobby object : id + title
        const newHobby = {
            id: casual.uuid,
            title: casual.title,
        }
        // dispatch action to add a new hobby to redux store
        // gửi action lên store kèm theo dữ liệu (truyền vào cho payload)
        const action = addNewHobby(newHobby);
        dispatch(action);
    }
    
    const handleHobbyClick = (hobby) => {
        console.log(hobby);
        const action = setActiceHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>REDUX HOOKS - Home Page</h1>    
            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick}></HobbyList>
      
        </div>
    );
}

export default HomePage;