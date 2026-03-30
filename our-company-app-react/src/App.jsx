export default function App() {
	return (
		<>
			<my-header className="u-margin-bottom-48"></my-header>

			<main className="main u-margin-bottom-80">
				<my-layout-container variant="narrow">
					<my-page-header
						className="u-margin-bottom-32"
						heading="Request Paid Time Off"
						description="Please submit your PTO request at least two weeks in advance. All requests are subject to manager approval, departmental coverage requirements, and Mercury's current position relative to Venus."
					></my-page-header>
					<my-form>
						<my-text-field
							type="text"
							id="name"
							label="Full Legal Name (as displayed on lanyard)"
						></my-text-field>
						<my-text-field
							type="email"
							id="email"
							label="Manager's Email"
						></my-text-field>
						<my-text-field
							type="text"
							id="dates"
							label="Requested Date(s)"
						></my-text-field>
						<my-textarea-field
							id="reason"
							label="Brief Justification for Time Away"
							placeholder="e.g. &quot;I would like to remember what the sun looks like&quot;"
						></my-textarea-field>
						<my-button type="submit">Submit for Approval</my-button>
					</my-form>
				</my-layout-container>
			</main>

			<my-footer></my-footer>
		</>
	);
}
