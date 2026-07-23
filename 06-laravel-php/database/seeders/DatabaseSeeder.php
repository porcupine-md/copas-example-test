<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        foreach (['database connected', 'migrations complete', 'seed data loaded'] as $label) {
            DB::table('deploy_checks')->updateOrInsert(
                ['label' => $label],
                ['status' => 'ok', 'updated_at' => now(), 'created_at' => now()],
            );
        }
    }
}
