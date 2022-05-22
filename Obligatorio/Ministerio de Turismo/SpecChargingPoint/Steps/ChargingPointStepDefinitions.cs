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
    public sealed class ChargingPointStepDefinitions
    {

        private readonly ChargingPointIntentModel chargingPointIntentModel = new ChargingPointIntentModel();


        private readonly ScenarioContext _scenarioContext;


        public ChargingPointStepDefinitions(ScenarioContext scenarioContext)
        {
            _scenarioContext = scenarioContext;
        }

        [Given("the name is (.*)")]
        public void GivenTheNameIs(string name)
        {
            chargingPointIntentModel.Name = name;
        }


        [Given("the description is (.*)")]
        public void GivenDescriptionIs(string description)
        {
            chargingPointIntentModel.Description = description;
        }

        [Given("the address is (.*)")]
        public void GivenAddressIs(string address)
        {
            chargingPointIntentModel.Address = address;
        }

        [Given("the regionId is (.*)")]
        public void GivenRegionIdIs(int regionId)
        {
            chargingPointIntentModel.RegionId = regionId;
        }

        [Given("the identifier is (.*)")]
        public void GivenIdentifierIs(string identifier)
        {
            chargingPointIntentModel.Identifier = identifier;
        }

        [When("the user press the button Crear")]
        public async Task WhenTheUserPressCreate()
        {
            var requestBody = JsonConvert.SerializeObject(new { Name = chargingPointIntentModel.Name, Address = chargingPointIntentModel.Address, Description = chargingPointIntentModel.Description, Identifier = chargingPointIntentModel.Identifier, RegionId = chargingPointIntentModel.RegionId });
            var request = new HttpRequestMessage(HttpMethod.Post, $"http://localhost:5000/api/chargingPoints")
            {
                Content = new StringContent(requestBody)
                {
                    Headers =
                    {
                        ContentType = new MediaTypeHeaderValue("application/json")
                    }
                }
            };
            var client = new HttpClient();
            var response = await client.SendAsync(request).ConfigureAwait(false);
            try
            {
                _scenarioContext.Set(response.StatusCode, "ResponseStatusCode");
            }
            catch
            {

            }

        }

        [Then("the result code should be (.*)")]
        public void ThenTheResultShouldBe(int statusCode)
        {
            Assert.AreEqual(statusCode, (int)_scenarioContext.Get<HttpStatusCode>("ResponseStatusCode"));
        }
    }
}
