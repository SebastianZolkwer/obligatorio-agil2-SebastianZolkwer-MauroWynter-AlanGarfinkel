using Microsoft.VisualStudio.TestTools.UnitTesting;
using MinTur.Models.In;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using TechTalk.SpecFlow;
using TechTalk.SpecFlow.Assist;
using TechTalk.SpecFlow.Assist.ValueRetrievers;

namespace SpecChargingPoint.Steps
{
    [Binding]
    public class DeleteChargingPointSteps
    {
        private readonly ScenarioContext _scenarioContext;

        private int _id;


        public DeleteChargingPointSteps(ScenarioContext scenarioContext)
        {
            _scenarioContext = scenarioContext;
        }

        [Given(@"the id is (.*)")]
        public void GivenTheIdIs(int id)
        {
            _id = id;
        }
        
        [When(@"the user presses the button Eliminar")]
        public async Task WhenTheUserPressesTheButtonEliminar()
        {
            /*var requestBody = JsonConvert.SerializeObject(new { Name = "Tesla Supercharger", Address = "Cartel de Montevideo", Description = "Primer supercharger de Uruguay", Identifier = "1234", RegionId = 1, id = _id }); ;
            var create_request = new HttpRequestMessage(HttpMethod.Post, $"http://localhost:5000/api/chargingPoints")
            {
                Content = new StringContent(requestBody)
                {
                    Headers =
                    {
                        ContentType = new MediaTypeHeaderValue("application/json")
                    }
                }
            };*/
            var client = new HttpClient();
            //var create_response = await client.SendAsync(create_request).ConfigureAwait(false);

            var delete_request = new HttpRequestMessage(HttpMethod.Delete, $"http://localhost:5000/api/chargingPoints/" + _id.ToString()){};
            var delete_response = await client.SendAsync(delete_request).ConfigureAwait(false);
            try
            {
                _scenarioContext.Set(delete_response.StatusCode, "ResponseStatusCode");
            }
            catch
            {

            }
        }
        
        [Then(@"the result should be (.*)")]
        public void ThenTheResultShouldBe(int statusCode)
        {
            Assert.AreEqual(statusCode, (int)_scenarioContext.Get<HttpStatusCode>("ResponseStatusCode"));
        }
    }
}
