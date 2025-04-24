import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 22, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              At Web Performance Analyzer, we respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our website
              and tell you about your privacy rights and how the law protects you.
            </p>
            <p>
              Please read this privacy policy carefully before using our service. By using Web Performance Analyzer, you
              consent to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
              <CardDescription>Types of data we collect and process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-medium">Website URLs</h3>
              <p>
                When you use our service to analyze a website, we collect the URL you submit. This is necessary to
                perform the analysis you requested.
              </p>

              <h3 className="text-lg font-medium">Analysis Results</h3>
              <p>
                We store the results of website performance and accessibility analyses. These results include metrics
                related to page load times, accessibility scores, and other technical data about the analyzed website.
              </p>

              <h3 className="text-lg font-medium">Usage Data</h3>
              <p>
                We may collect information about how you interact with our service. This includes information such as
                your browser type, IP address, the pages you visit, the time and date of your visit, and other
                diagnostic data.
              </p>

              <h3 className="text-lg font-medium">Cookies</h3>
              <p>
                We use cookies and similar tracking technologies to track activity on our service and hold certain
                information. Cookies are files with a small amount of data that may include an anonymous unique
                identifier.
              </p>
            </CardContent>
          </Card>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our service</li>
              <li>Improve, personalize, and expand our service</li>
              <li>Understand and analyze how you use our service</li>
              <li>Develop new features, products, and services</li>
              <li>Communicate with you about updates or changes to our service</li>
              <li>Prevent fraudulent use of our service</li>
              <li>Provide customer support</li>
            </ul>
          </section>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
              <CardDescription>How we protect your information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The security of your data is important to us. We strive to use commercially acceptable means to protect
                your personal information. However, no method of transmission over the Internet or method of electronic
                storage is 100% secure.
              </p>
              <p>
                We implement appropriate technical and organizational measures to ensure a level of security appropriate
                to the risk, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access controls to limit data access</li>
                <li>Secure data storage practices</li>
              </ul>
            </CardContent>
          </Card>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-4">
              We may employ third-party companies and individuals to facilitate our service, provide the service on our
              behalf, perform service-related tasks, or assist us in analyzing how our service is used.
            </p>
            <p>
              These third parties have access to your personal data only to perform these tasks on our behalf and are
              obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
              <CardDescription>Understanding your data protection rights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>

              <h3 className="text-lg font-medium">Right to Access</h3>
              <p>
                You have the right to request copies of your personal data. We may charge a small fee for this service.
              </p>

              <h3 className="text-lg font-medium">Right to Rectification</h3>
              <p>
                You have the right to request that we correct any information you believe is inaccurate or complete
                information you believe is incomplete.
              </p>

              <h3 className="text-lg font-medium">Right to Erasure</h3>
              <p>You have the right to request that we erase your personal data, under certain conditions.</p>

              <h3 className="text-lg font-medium">Right to Restrict Processing</h3>
              <p>
                You have the right to request that we restrict the processing of your personal data, under certain
                conditions.
              </p>

              <h3 className="text-lg font-medium">Right to Data Portability</h3>
              <p>
                You have the right to request that we transfer the data we have collected to another organization, or
                directly to you, under certain conditions.
              </p>
            </CardContent>
          </Card>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="mb-4">
              Our service does not address anyone under the age of 13. We do not knowingly collect personally
              identifiable information from children under 13. If you are a parent or guardian and you are aware that
              your child has provided us with personal data, please contact us.
            </p>
          </section>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
              <CardDescription>How we update our policy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
              </p>
            </CardContent>
          </Card>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>By email: privacy@webperformanceanalyzer.com</li>
              <li>By visiting the contact page on our website</li>
            </ul>
          </section>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
