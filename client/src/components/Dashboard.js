import React, { useEffect, useState } from 'react'
import { Grid, Paper } from '@mui/material';
import ClockLoader from "react-spinners/ClockLoader";
import Calendar from './Calendar';
import axios from 'axios';
import AssignmentList from './AssignmentList';

export default function Dashboard(props) {
    const [loading, setLoading] = useState(false);
    const [assignments, setAssignments] = useState([]);

    const calculateStartDateTime = (date, time) => {
        if (time.includes('p')) {
            time = time.replace('p', '')
            let hm = time.split(":")
            hm[0] = String(parseInt(hm[0]) + 10)
            hm = hm.join(":")
            return date + ' ' + hm
        } else {
            time = time.replace('a', '')
            let hm = time.split(":")
            hm[0] = String(parseInt(hm[0]) - 2)
            hm = hm.join(":")
            return date + ' ' + hm
        }
    }
    
    const calculateEndDateTime = (date, time) => {
        if (time.includes('p')) {
            time = time.replace('p', '')
            let hm = time.split(":")
            hm[0] = String(parseInt(hm[0]) + 12)
            hm = hm.join(":")
            return date + ' ' + hm
        }
        return date + ' ' + time.replace('a','')
    }

    useEffect(() => {
        setLoading(true)
        const fetchAssignment = async () => {
            await axios.get(`/profile/calendar`,
                {
                    params: {
                        user: props.auth.user.username
                    }
                })
                .then((res) => {
                    let parsedAssignment = []
                    // eslint-disable-next-line array-callback-return
                    res.data.assignments.map(assignment => {
                        let parsedData = {
                            Id: 0,
                            Subject: 'Title',
                            StartTime: null,
                            EndTime: null,
                            IsAllDay: false,
                            IsReadonly: true,
                        }
                        parsedData.Id = assignment._id
                        parsedData.Subject = assignment.Subject
                        parsedData.StartTime = new Date(calculateStartDateTime(assignment['Due Date'], assignment.Time))
                        parsedData.EndTime = new Date(calculateEndDateTime(assignment['Due Date'], assignment.Time))
                        parsedAssignment.push(parsedData)
                    })
                    setAssignments(parsedAssignment)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        setTimeout(() => {
            setLoading(false)
        },fetchAssignment())
    // eslint-disable-next-line
    },[])

    return (
        <>
            {!props.auth.isAuthenticated && props.history.push("/")}
            <Grid container justifyContent="center" alignItems="center" pr={2} pl={2}>
                {loading ?
                    <ClockLoader
                        size={60}
                        color={"#123abc"}
                        loading={loading}
                    />
                    :
                    <Grid container display="grid" gridAutoFlow="column" spacing={1}>
                        <Grid item>
                            <Paper sx={{ textAlign: "center", padding: "0", minHeight: "45vh", width: "100%", minWidth: "300px" }} >
                                 <AssignmentList assignments={assignments}/>
                            </Paper>
                        
                        </Grid>
                        <Grid item>
                            <Paper sx={2}>
                                   <Calendar assignments={assignments} />
                            </Paper>
                        </Grid>
                        {/* <Grid item>
                            <Paper sx={{textAlign: "center", padding:"5%", minHeight:"45vh", width:"40%", minWidth:"300px"}} >
                                Due Today
                            </Paper>
                        </Grid> */}
                    </Grid> 
                        
                }
            </Grid>
            
        </>
    );
}
