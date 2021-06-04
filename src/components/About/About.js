import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit ();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList: [],
        isError: '',
        userInfo: {}
    };

componentDidMount () {

    octokit.repos.listForUser ({
            username: 'antonchenko'
        }).then(({ data })=> {
            this.setState ({
                repoList: data,
                isLoading: false,
                userInfo: true
            });
        })
    .catch (() => {
            
            this.setState ({
                isError: '',
                isLoading: false,
                userInfo: false
                })
            });     
    }

    render () {
        const { isLoading, repoList, isError, userInfo } = this.state;

        return (
         <CardContent>
            <h1 className={styles.word}>{isLoading ? <CircularProgress color="secondary" /> : 'My repositories'}</h1>
            {!isLoading &&
            <div>
                {!userInfo ? 'there is not such repository' + isError :
                    <div className={styles.user}>
                        <img src={repoList[0].owner.avatar_url} alt="" className={styles.img}/>
                        <a href={repoList[0].owner.html_url} className={styles.username}>
                                    {repoList[0].owner.login}
                        </a>
                    </div>} 
               <div>
                    <ol>
                        {repoList.map(repo => (<li key={repo.id}>
                            <a href={repo.html_url} className={styles.link}>
                        {repo.name}
                           </a>
                        </li>))}
                     </ol>
                </div>
            </div>}
       </CardContent>)
    }  
}

export default About; 