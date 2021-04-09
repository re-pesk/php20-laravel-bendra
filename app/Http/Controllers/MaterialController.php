<?php

namespace App\Http\Controllers;

use App\Models\Material;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    public function searchMaterials(Request $request)
    {
        $searchKey = $request->get('search');
        if ($searchKey == []) {
            $viewSearch = array();
        } else {
            $viewSearch = Material::leftJoin('types', 'materials.type_id', '=', 'types.id')
                ->leftJoin('categories', 'materials.category_id', '=', 'categories.id')
                ->select('materials.name', 'categories.name as category', 'types.name as type', 'materials.addition_date', 'materials.link_to_material')
                ->orWhere(function ($queryName) use ($searchKey) {
                    $queryName->where('materials.name', 'LIKE', '%' . $searchKey . '%');
                })->orWhere(function ($queryType) use ($searchKey) {
                $queryType->where('types.name', 'LIKE', '%' . $searchKey . '%');
            })->orWhere(function ($queryCategory) use ($searchKey) {
                $queryCategory->where('categories.name', 'LIKE', '%' . $searchKey . '%');
            })->get();
        }

        return view('search', ['search_results' => $viewSearch]);
    }
}
