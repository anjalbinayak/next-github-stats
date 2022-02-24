import styles from "../styles/Home.module.css";
import { FaLink } from "react-icons/fa";
export default function UserInfo({
  followers,
  repos,
  followings,
  isError,
  errorMesg,
}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="flex">
          <div className="m-1">
            <ul>
              <p className="text-blue-700 font-bold">
                {" "}
                Repositories({repos.length}):
              </p>
              {repos.map((repo) => {
                return (
                  <li title={repo.full_name} key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      {repo.name} <FaLink className="none" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="m-1">
            <ul>
              <p className="text-blue-700 font-bold">
                Followers({followers.length}):
              </p>
              {followers.map((follower) => {
                return (
                  <li key={follower.id}>
                    <a
                      href={follower.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {follower.login}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="m-1">
            <ul>
              <p className="text-blue-700 font-bold">
                Following({followings.length}):
              </p>
              {followings.map((following) => {
                return (
                  <li key={following.id}>
                    {" "}
                    <a
                      href={following.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {following.login}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const FOLLOWER_ENDPOINT = "https://api.github.com/users/";
  const username = context.params.username;
  const followerResponse = await fetch(
    `${FOLLOWER_ENDPOINT}${username}/followers`
  );
  const followerData = await followerResponse.json();

  const repoResponse = await fetch(`${FOLLOWER_ENDPOINT}${username}/repos`);
  const repoData = await repoResponse.json();

  const followingResponse = await fetch(
    `${FOLLOWER_ENDPOINT}${username}/following`
  );
  const followingData = await followingResponse.json();

  return {
    props: {
      followers: followerData,
      repos: repoData,
      followings: followingData,
      isError: false,
      errorMesg: "",
    },
  };
}
