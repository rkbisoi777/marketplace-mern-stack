const RegisterForm = ({
    handleSubmit,
    companyName,
    setCompanyName,
    companyEmail,
    setCompanyEmail,
    password,
    setPassowrd
}) =>(
    <form onSubmit={handleSubmit} className="mt-3">
        <div className="form-group mb-3">
            <label className="form-label">Company Name</label>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Company Name"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
            />
        </div>
        <div className="form-group mb-3">
            <label className="form-label">Company Email</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter Company Email"
                value={companyEmail}
                onChange={e => setCompanyEmail(e.target.value)}
            />
        </div>
        <div className="form-group mb-3">
            <label className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassowrd(e.target.value)}
            />
        </div>

        <button className="btn btn-primary">Submit</button>
    </form>
);

export default RegisterForm;