import { useParams } from "react-router-dom"

const ProfilePage = () => {
  const params = useParams<{profileId: string}>()
  return (
    <div>Profile Page {params.profileId}</div>
  )
}

export default ProfilePage