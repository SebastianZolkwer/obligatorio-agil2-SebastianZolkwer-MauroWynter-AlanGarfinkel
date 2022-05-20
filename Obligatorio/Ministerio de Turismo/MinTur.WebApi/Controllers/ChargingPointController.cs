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

        [HttpPost]
        public IActionResult Create([FromBody] ChargingPointIntentModel chargingPointIntentModel)
        {
            ChargingPoint chargingPoint = _chargingPointManager.Create(chargingPointIntentModel.ToEntity());
            ChargingPointDetailModel created = new ChargingPointDetailModel(chargingPoint);
            return Ok(created);
        }
    }
}