import { useUser } from '../../contexts/UserContext';
import { useState, useEffect } from 'react';
import firebase from '../../firebase/firebaseConfig';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../../sass/main.scss';
import SvgSettings from '../buttons/Settings';
import SvgDelete from '../buttons/Delete';

export const NewAgeProjects = () => {
  const { user } = useUser();
  const [projects, setProjects] = useState(null);
  const [expandedProjectId, setExpandedProjectId] = useState('');

  const userUid = user.uid;

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(`users/${userUid}/projects`)
      .orderBy('createdAt', 'desc')

      .onSnapshot((snapshot) => {
        const projects = [];

        snapshot.forEach((project) => {
          projects.push({ id: project.id, ...project.data() });
        });
        setProjects(projects);
      });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [userUid]);

  const deleteProject = (project) => {
    const unsubscribe = firebase
      .firestore()
      .collection(`users/${userUid}/projects`)
      .doc(project.id)
      .delete();
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  };

  return (
    projects &&
    projects.map((project) => {
      return (
        <div className='single-project single-row' key={project.id}>
          <Link to={`/board/project/${project.id}`}>
            <div>{project.projectName}</div>
          </Link>
          <button
            className='single-project__option optionBtn'
            onClick={() =>
              setExpandedProjectId((existingProjectId) => {
                if (existingProjectId === project.id) {
                  return null;
                }
                return project.id;
              })
            }
          >
            <SvgSettings />
          </button>
          {expandedProjectId === project.id &&
            ReactDOM.createPortal(
              <>
                <div className='selectContainer'>
                  <button
                    className='deleteBtn columnDelete'
                    onClick={() => deleteProject(project)}
                  >
                    <SvgDelete />
                  </button>
                </div>
              </>,
              document.getElementById('overlay')
            )}
        </div>
      );
    })
  );
};
