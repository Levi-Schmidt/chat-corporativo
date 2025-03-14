<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define os comandos fornecidos pelo aplicativo.
     *
     * @var array
     */
    protected $commands = [
        // Comandos personalizados
    ];

    /**
     * Define a programação das tarefas do aplicativo.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // Defina as tarefas agendadas aqui
    }

    /**
     * Registra os comandos para o aplicativo.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
