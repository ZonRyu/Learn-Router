import { NavLink, Outlet } from "react-router-dom"

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5]

  return (
    <div className="flex gap-2">
        <div className="flex flex-col gap-2">
            {profiles.map((profile) => (
            <NavLink 
                to={`/profiles/${profile}`} 
                key={profile} 
                className={({ isActive }) => {
                    return isActive ? "bg-slate-300" : ""
                }}
                // NavLink provide a `className` prop that can be used to style the link
                // The `isActive` prop will be true when the link is active
            >
                Profile {profile}
            </NavLink>
            ))}
        </div>
        <Outlet /> {/* To show the content of the child route */}
    </div>
  )
}

export default ProfilesPage