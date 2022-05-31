using MinTur.BusinessLogicInterface.ResourceManagers;
using MinTur.Domain.BusinessEntities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using MinTur.Models.In;
using MinTur.Models.Out;
using System.Collections.Generic;
using System.Linq;
using MinTur.WebApi.Filters;
using MinTur.BusinessLogicInterface.Pricing;
using System.Collections.Generic;
using System.Linq;

namespace MinTur.WebApi.Controllers
{
    [EnableCors("AllowEverything")]
    [Route("api/chargingPoints")]
    [ApiController]
    public class ChargingPointController : ControllerBase
    {
        private readonly IChargingPointManager _chargingPointManager;

        public ChargingPointController(IChargingPointManager chargingPointManager)
        {
            _chargingPointManager = chargingPointManager;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            List<ChargingPoint> chargingPoints = _chargingPointManager.GetAll();
            List<ChargingPointDetailModel> chargingPointModels = chargingPoints.Select(
                chargingPoint => new ChargingPointDetailModel(chargingPoint)).ToList();

            return Ok(chargingPointModels);
        }

        [HttpPost]
        public IActionResult Create([FromBody] ChargingPointIntentModel chargingPointIntentModel)
        {
            ChargingPoint chargingPoint = _chargingPointManager.Create(chargingPointIntentModel.ToEntity());
            ChargingPointDetailModel created = new ChargingPointDetailModel(chargingPoint);
            return Created("api/chargingPoints/" + created.Id, created);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            _chargingPointManager.DeleteChargingPointById(id);
            return Ok(new { ResultMessage = $"Charging Point {id} succesfuly deleted" });
        }
    }
}