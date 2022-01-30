import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';


const Dashboard = () => {
   const { user } = useSelector(state => ({ ...state.user }))

  return (
    <>
    <Header title={`${user.nick} dashboard`} image={user.dashboardImage ? user.dashboardImage : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf189e7e-b36d-4d08-a410-2cad87c860a9/degmfcj-3f451102-2a5f-41d3-b911-8a2d8533519d.jpg/v1/fill/w_1095,h_730,q_70,strp/medieval_river_by_simonjody_degmfcj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcL2NmMTg5ZTdlLWIzNmQtNGQwOC1hNDEwLTJjYWQ4N2M4NjBhOVwvZGVnbWZjai0zZjQ1MTEwMi0yYTVmLTQxZDMtYjkxMS04YTJkODUzMzUxOWQuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4mZJ2N6BwYGMDLtTMYct1J0IxT1ac3IXzUqnxOIlDUU'} />
      <Container>
        
    </Container>
      </>
  )
};

export default Dashboard;
